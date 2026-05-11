#!/usr/bin/env node
// Audit every lesson's Scastie snippet ID against scastie.scala-lang.org and
// write a markdown report to scastie-audit.md. Investigation-only: does not
// modify any lesson page.
//
// Usage: node scripts/audit-scastie-ids.mjs

import { execFileSync } from 'node:child_process'
import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const HERE = dirname(fileURLToPath(import.meta.url))
const REPO = resolve(HERE, '..')
const LESSONS_DIR = resolve(REPO, 'pages/scala')
const REPORT_PATH = resolve(REPO, 'scastie-audit.md')

// Commit that bulk-replaced every scastieId. 408ae4d~1 is the last revision
// with the previous (pre-PR-#31) IDs.
const PREV_REV = '408ae4d~1'

const SCASTIE_HOST = 'https://scastie.scala-lang.org'
const CONCURRENCY = 5

const ID_RE = /const\s+scastieId\s*=\s*"([^"]+)"/

function extractId(source) {
  const m = source.match(ID_RE)
  return m ? m[1] : null
}

function listLessons() {
  return readdirSync(LESSONS_DIR)
    .filter((f) => f.endsWith('.js'))
    .map((f) => f.replace(/\.js$/, ''))
    .sort()
}

function currentId(slug) {
  return extractId(readFileSync(resolve(LESSONS_DIR, `${slug}.js`), 'utf8'))
}

function previousId(slug) {
  try {
    const out = execFileSync(
      'git',
      ['show', `${PREV_REV}:pages/scala/${slug}.js`],
      { cwd: REPO, stdio: ['ignore', 'pipe', 'ignore'] },
    ).toString('utf8')
    return extractId(out)
  } catch {
    return null // lesson didn't exist at that revision
  }
}

async function probe(id) {
  // Two complementary probes:
  //   * POST /api/download/<id> — clean 200 vs 404
  //   * GET  /api/snippets/<id> — what the embed actually hits;
  //     content-length distinguishes hit (>0) from miss (=0)
  const download = await fetch(`${SCASTIE_HOST}/api/download/${id}`, {
    method: 'POST',
  })
  const downloadBody = await download.text()

  const snippet = await fetch(`${SCASTIE_HOST}/api/snippets/${id}`, {
    headers: { Accept: 'application/json' },
  })
  const snippetBody = await snippet.text()

  let status
  if (download.status === 200 && snippetBody.length > 0) status = 'ok'
  else if (download.status === 404) status = 'not_found'
  else if (download.status === 200 && snippetBody.length === 0) status = 'empty'
  else status = `error_${download.status}`

  return {
    status,
    downloadStatus: download.status,
    downloadBytes: downloadBody.length,
    snippetStatus: snippet.status,
    snippetBytes: snippetBody.length,
  }
}

async function probeAll(ids) {
  const cache = new Map()
  const queue = [...ids]
  const workers = Array.from({ length: CONCURRENCY }, async () => {
    while (queue.length) {
      const id = queue.shift()
      if (cache.has(id)) continue
      try {
        cache.set(id, await probe(id))
      } catch (e) {
        cache.set(id, { status: `error_${e.code || 'fetch'}` })
      }
    }
  })
  await Promise.all(workers)
  return cache
}

async function embedMeta() {
  const res = await fetch(`${SCASTIE_HOST}/embedded.js`, { method: 'HEAD' })
  return {
    status: res.status,
    lastModified: res.headers.get('last-modified'),
    etag: res.headers.get('etag'),
    contentLength: res.headers.get('content-length'),
  }
}

function summarize(rows, key) {
  const counts = {}
  for (const r of rows) {
    const s = r[key]?.status ?? 'missing_id'
    counts[s] = (counts[s] ?? 0) + 1
  }
  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .map(([k, v]) => `${v} ${k}`)
    .join(' / ')
}

function fmtCell(probe) {
  if (!probe) return '—'
  return `${probe.status} (POST ${probe.downloadStatus}/${probe.downloadBytes}b, GET ${probe.snippetStatus}/${probe.snippetBytes}b)`
}

async function main() {
  const slugs = listLessons()
  console.log(`Found ${slugs.length} lessons.`)

  const rows = slugs.map((slug) => ({
    slug,
    cur: currentId(slug),
    prev: previousId(slug),
  }))

  const uniqueIds = new Set()
  for (const r of rows) {
    if (r.cur) uniqueIds.add(r.cur)
    if (r.prev && r.prev !== r.cur) uniqueIds.add(r.prev)
  }
  console.log(`Probing ${uniqueIds.size} unique IDs...`)

  const [cache, embed] = await Promise.all([probeAll(uniqueIds), embedMeta()])

  for (const r of rows) {
    r.curProbe = r.cur ? cache.get(r.cur) : null
    r.prevProbe = r.prev ? cache.get(r.prev) : null
  }

  const lines = []
  lines.push('# Scastie ID audit')
  lines.push('')
  lines.push(`Run: ${new Date().toISOString()}`)
  lines.push('')
  lines.push('## Scastie embed library (`/embedded.js`)')
  lines.push('')
  lines.push(`- HTTP status: ${embed.status}`)
  lines.push(`- Last-Modified: ${embed.lastModified}`)
  lines.push(`- ETag: ${embed.etag}`)
  lines.push(`- Content-Length: ${embed.contentLength}`)
  lines.push('')
  lines.push('## Summary')
  lines.push('')
  lines.push(`- Lessons: ${rows.length}`)
  lines.push(`- Unique IDs probed: ${uniqueIds.size}`)
  lines.push(`- Current IDs: ${summarize(rows, 'curProbe')}`)
  lines.push(`- Previous IDs (from ${PREV_REV}): ${summarize(rows, 'prevProbe')}`)
  lines.push('')
  lines.push('Status legend:')
  lines.push('- `ok` — POST /api/download/<id> returned 200 AND GET /api/snippets/<id> returned a non-empty body. Snippet exists on Scastie.')
  lines.push('- `not_found` — POST /api/download/<id> returned 404. Snippet is gone (or never existed).')
  lines.push('- `empty` — POST returned 200 but GET returned an empty body. Ambiguous; treat as broken.')
  lines.push('- `error_<n>` — unexpected HTTP/fetch error.')
  lines.push('')
  lines.push('## Per-lesson results')
  lines.push('')
  lines.push('| Lesson | Current ID | Current status | Previous ID | Previous status |')
  lines.push('| --- | --- | --- | --- | --- |')
  for (const r of rows) {
    lines.push(
      `| ${r.slug} | ${r.cur ?? '—'} | ${fmtCell(r.curProbe)} | ${r.prev ?? '—'} | ${fmtCell(r.prevProbe)} |`,
    )
  }
  lines.push('')

  writeFileSync(REPORT_PATH, lines.join('\n'))
  console.log(`Wrote ${REPORT_PATH}`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
