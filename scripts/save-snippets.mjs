#!/usr/bin/env node
// Re-save every lesson snippet to Scastie under an authenticated session
// and rewrite the resulting base64UUID into each pages/scala/<lesson>.js.
//
// Usage:
//   SCASTIE_COOKIE='...' node scripts/save-snippets.mjs            # save + rewrite
//   node scripts/save-snippets.mjs --dry-run                       # no network, no writes
//   node scripts/save-snippets.mjs --force                         # ignore tmp resume file
//   node scripts/save-snippets.mjs --skip-save                     # rewrite pages from tmp file only
//
// Auth: paste the full `Cookie:` header value for scastie.scala-lang.org
// (copy from browser DevTools while logged in) either in env var SCASTIE_COOKIE
// or in a gitignored file named .scastie-cookie at the repo root.

import fs from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.resolve(__dirname, "..")
const SNIPPETS_JSON = path.join(REPO_ROOT, "snippets", "snippets.json")
const SNIPPETS_DIR = path.join(REPO_ROOT, "snippets")
const PAGES_DIR = path.join(REPO_ROOT, "pages", "scala")
const TMP_IDS = path.join(REPO_ROOT, ".scastie-ids.tmp.json")
const COOKIE_FILE = path.join(REPO_ROOT, ".scastie-cookie")

const SCASTIE_HOST = "https://scastie.scala-lang.org"
const SAVE_URL = `${SCASTIE_HOST}/api/save`
const CONCURRENCY = 2
const MAX_RETRIES = 3

const argv = new Set(process.argv.slice(2))
const DRY_RUN = argv.has("--dry-run")
const FORCE = argv.has("--force")
const SKIP_SAVE = argv.has("--skip-save")

const log = (...a) => console.log("[save-snippets]", ...a)
const err = (...a) => console.error("[save-snippets]", ...a)

async function readCookie() {
    if (process.env.SCASTIE_COOKIE) return process.env.SCASTIE_COOKIE.trim()
    try {
        return (await fs.readFile(COOKIE_FILE, "utf8")).trim()
    } catch {
        throw new Error(
            `No Scastie cookie found. Set SCASTIE_COOKIE env var or create ${COOKIE_FILE} with the Cookie: header value from your logged-in browser.`,
        )
    }
}

async function readJson(p, fallback) {
    try {
        return JSON.parse(await fs.readFile(p, "utf8"))
    } catch (e) {
        if (e.code === "ENOENT" && fallback !== undefined) return fallback
        throw e
    }
}

async function writeJson(p, obj) {
    await fs.writeFile(p, JSON.stringify(obj, null, 2) + "\n")
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

async function postSave(body, cookie) {
    let attempt = 0
    while (true) {
        attempt++
        let resp
        try {
            resp = await fetch(SAVE_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "User-Agent": "tour-of-scala-resaver",
                    Cookie: cookie,
                },
                body: JSON.stringify(body),
            })
        } catch (e) {
            if (attempt >= MAX_RETRIES) throw e
            const wait = 500 * 2 ** (attempt - 1)
            err(`network error, retry in ${wait}ms:`, e.message)
            await sleep(wait)
            continue
        }
        if (resp.status === 401 || resp.status === 403) {
            throw new Error(`auth failed (HTTP ${resp.status}) — cookie expired or invalid`)
        }
        if (resp.status >= 500 && attempt < MAX_RETRIES) {
            const wait = 500 * 2 ** (attempt - 1)
            err(`HTTP ${resp.status}, retry in ${wait}ms`)
            await sleep(wait)
            continue
        }
        if (!resp.ok) {
            const text = await resp.text().catch(() => "")
            throw new Error(`HTTP ${resp.status}: ${text.slice(0, 500)}`)
        }
        return resp.json()
    }
}

async function runWithConcurrency(items, limit, worker) {
    const queue = items.slice()
    const active = new Set()
    let firstError = null
    async function spawn() {
        const item = queue.shift()
        if (!item) return
        const p = (async () => {
            try {
                await worker(item)
            } catch (e) {
                if (!firstError) firstError = e
                err(`failed: ${item.lesson}: ${e.message}`)
            }
        })()
        active.add(p)
        p.finally(() => {
            active.delete(p)
            if (queue.length && !firstError) spawn()
        })
    }
    for (let i = 0; i < Math.min(limit, queue.length); i++) spawn()
    while (active.size) await Promise.race(active)
    if (firstError) throw firstError
}

async function rewritePage(lesson, newId) {
    const file = path.join(PAGES_DIR, `${lesson}.js`)
    const src = await fs.readFile(file, "utf8")
    const re = /^const scastieId = "[^"]*"$/m
    const matches = src.match(/^const scastieId = "[^"]*"$/gm)
    if (!matches || matches.length !== 1) {
        throw new Error(
            `${file}: expected exactly 1 \`const scastieId = "..."\` line, found ${matches ? matches.length : 0}`,
        )
    }
    const next = src.replace(re, `const scastieId = "${newId}"`)
    if (next === src) {
        log(`${lesson}: already ${newId}, no rewrite needed`)
        return
    }
    await fs.writeFile(file, next)
}

async function main() {
    const entries = await readJson(SNIPPETS_JSON)
    log(`loaded ${entries.length} entries from snippets.json`)

    // 1. Validate every lesson has a .scala source file + a page file.
    for (const e of entries) {
        const scalaPath = path.join(SNIPPETS_DIR, `${e.lesson}.scala`)
        const pagePath = path.join(PAGES_DIR, `${e.lesson}.js`)
        await fs.access(scalaPath).catch(() => {
            throw new Error(`missing scala file: ${scalaPath}`)
        })
        await fs.access(pagePath).catch(() => {
            throw new Error(`missing page file: ${pagePath}`)
        })
    }
    log("validated paths for all 82 lessons")

    // 2. Build POST bodies.
    const bodies = []
    for (const e of entries) {
        const code = await fs.readFile(
            path.join(SNIPPETS_DIR, `${e.lesson}.scala`),
            "utf8",
        )
        const { lesson, ...meta } = e
        bodies.push({ lesson, body: { ...meta, code } })
    }

    if (DRY_RUN) {
        log("--dry-run: showing first body shape and size summary")
        const summary = bodies.map(({ lesson, body }) => ({
            lesson,
            scalaVersion: body.target?.scalaVersion,
            codeBytes: body.code.length,
            libs: body.libraries.length,
        }))
        console.table(summary.slice(0, 5))
        log(`... ${summary.length} entries total. Aborting before any network.`)
        return
    }

    // 3. Save (unless --skip-save).
    let ids = await readJson(TMP_IDS, {})
    if (FORCE) {
        log("--force: ignoring existing tmp ids")
        ids = {}
    }

    if (!SKIP_SAVE) {
        const cookie = await readCookie()
        const todo = bodies.filter((b) => !ids[b.lesson])
        log(`${ids && Object.keys(ids).length} already saved; ${todo.length} remaining`)

        let done = Object.keys(ids).length
        await runWithConcurrency(todo, CONCURRENCY, async ({ lesson, body }) => {
            const resp = await postSave(body, cookie)
            const newId = resp?.base64UUID
            if (!newId || typeof newId !== "string") {
                throw new Error(`no base64UUID in response: ${JSON.stringify(resp).slice(0, 300)}`)
            }
            ids[lesson] = newId
            await writeJson(TMP_IDS, ids)
            done++
            log(`saved ${done}/${entries.length}: ${lesson} -> ${newId}`)
        })

        if (Object.keys(ids).length !== entries.length) {
            throw new Error(
                `only ${Object.keys(ids).length}/${entries.length} saved; aborting before page rewrite`,
            )
        }
        log(`all ${entries.length} snippets saved`)
    }

    // 4. Rewrite pages.
    for (const lesson of Object.keys(ids)) {
        await rewritePage(lesson, ids[lesson])
    }
    log(`rewrote ${Object.keys(ids).length} page files`)

    // 5. Clean up tmp file on full success.
    await fs.unlink(TMP_IDS).catch(() => {})
    log("done")
}

main().catch((e) => {
    err(e.stack || e.message)
    process.exit(1)
})
