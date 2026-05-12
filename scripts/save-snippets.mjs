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

const rawArgs = process.argv.slice(2)
const argv = new Set(rawArgs)
const DRY_RUN = argv.has("--dry-run")
const FORCE = argv.has("--force")
const SKIP_SAVE = argv.has("--skip-save")
const ONLY = (() => {
    const eq = rawArgs.find((a) => a.startsWith("--only="))
    if (eq) return eq.slice("--only=".length)
    const i = rawArgs.indexOf("--only")
    if (i !== -1 && rawArgs[i + 1]) return rawArgs[i + 1]
    return null
})()

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

function extractXsrfToken(cookie) {
    const m = cookie.match(/(?:^|;\s*)XSRF-TOKEN=([^;]+)/)
    return m ? decodeURIComponent(m[1]) : null
}

async function postSave(body, cookie, xsrf) {
    let attempt = 0
    while (true) {
        attempt++
        let resp
        try {
            const headers = {
                "Content-Type": "application/json",
                "User-Agent": "tour-of-scala-resaver",
                Cookie: cookie,
            }
            if (xsrf) headers["X-XSRF-TOKEN"] = xsrf
            resp = await fetch(SAVE_URL, {
                method: "POST",
                headers,
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
    const all = await readJson(SNIPPETS_JSON)
    let entries = all
    if (ONLY) {
        entries = all.filter((e) => e.lesson === ONLY)
        if (entries.length === 0) {
            throw new Error(
                `--only=${ONLY} did not match any lesson; ` +
                    `valid lessons: ${all.map((e) => e.lesson).join(", ")}`,
            )
        }
        log(`--only=${ONLY}: scoping to 1 lesson`)
    }
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
    log(`validated paths for ${entries.length} lesson(s)`)

    // 2. Build POST bodies.
    //
    // Scastie's BaseInputs is a sealed trait (SbtInputs | ScalaCliInputs) and
    // its target field SbtScalaTarget is also sealed (Scala2 | Scala3 | Js |
    // Native | Typelevel). Both use Circe's default semiauto derivation, which
    // encodes sealed traits as { "ClassName": { ...fields } } — so we have to
    // wrap our payload with those discriminators.
    const bodies = []
    for (const e of entries) {
        const code = await fs.readFile(
            path.join(SNIPPETS_DIR, `${e.lesson}.scala`),
            "utf8",
        )
        const scalaVersion = e.target?.scalaVersion
        if (!scalaVersion) throw new Error(`${e.lesson}: missing target.scalaVersion`)
        // Map old `tpe` shape to Circe-derivation class name. We only have
        // "Jvm" with Scala 2 in our corpus today; extend here if that grows.
        let target
        if (e.target.tpe === "Jvm" && scalaVersion.startsWith("2.")) {
            target = { Scala2: { scalaVersion } }
        } else if (e.target.tpe === "Jvm" && scalaVersion.startsWith("3.")) {
            target = { Scala3: { scalaVersion } }
        } else {
            throw new Error(
                `${e.lesson}: unsupported target ${JSON.stringify(e.target)}; add a mapping in save-snippets.mjs`,
            )
        }
        const sbtInputs = {
            isWorksheetMode: true,
            isShowingInUserProfile: false,
            code,
            target,
            libraries: e.libraries ?? [],
            librariesFromList: e.librariesFromList ?? [],
            sbtConfigExtra: e.sbtConfigExtra ?? "",
            sbtConfigSaved: e.sbtConfigSaved ?? null,
            sbtPluginsConfigExtra: e.sbtPluginsConfigExtra ?? "",
            sbtPluginsConfigSaved: e.sbtPluginsConfigSaved ?? null,
            forked: null,
        }
        bodies.push({ lesson: e.lesson, body: { SbtInputs: sbtInputs } })
    }

    if (DRY_RUN) {
        log("--dry-run: showing first body shape and size summary")
        const summary = bodies.map(({ lesson, body }) => {
            const inner = body.SbtInputs ?? body.ScalaCliInputs ?? {}
            const targetKey = Object.keys(inner.target ?? {})[0]
            return {
                lesson,
                discriminator: Object.keys(body)[0],
                target: targetKey,
                scalaVersion: inner.target?.[targetKey]?.scalaVersion,
                codeBytes: inner.code?.length,
                libs: inner.libraries?.length,
            }
        })
        console.table(summary.slice(0, 5))
        if (summary.length === 1) {
            log("full body:")
            console.log(JSON.stringify(bodies[0].body, null, 2))
        }
        log(`... ${summary.length} entries total. Aborting before any network.`)
        return
    }

    // 3. Save (unless --skip-save).
    let ids = await readJson(TMP_IDS, {})
    if (FORCE) {
        log("--force: ignoring existing tmp ids")
        ids = {}
    }

    const inScope = new Set(entries.map((e) => e.lesson))
    if (!SKIP_SAVE) {
        const cookie = await readCookie()
        const xsrf = extractXsrfToken(cookie)
        log(xsrf ? `XSRF-TOKEN found, will send X-XSRF-TOKEN header` : `no XSRF-TOKEN in cookie`)
        const todo = bodies.filter((b) => !ids[b.lesson])
        const alreadyInScope = entries.filter((e) => ids[e.lesson]).length
        log(`${alreadyInScope}/${entries.length} already saved (in scope); ${todo.length} remaining`)

        let done = alreadyInScope
        await runWithConcurrency(todo, CONCURRENCY, async ({ lesson, body }) => {
            const resp = await postSave(body, cookie, xsrf)
            const newId = resp?.base64UUID
            if (!newId || typeof newId !== "string") {
                throw new Error(`no base64UUID in response: ${JSON.stringify(resp).slice(0, 300)}`)
            }
            ids[lesson] = newId
            await writeJson(TMP_IDS, ids)
            done++
            log(`saved ${done}/${entries.length}: ${lesson} -> ${newId}`)
        })

        const savedInScope = entries.filter((e) => ids[e.lesson]).length
        if (savedInScope !== entries.length) {
            throw new Error(
                `only ${savedInScope}/${entries.length} saved; aborting before page rewrite`,
            )
        }
        log(`all ${entries.length} in-scope snippet(s) saved`)
    }

    // 4. Rewrite pages (only for in-scope lessons).
    let rewritten = 0
    for (const lesson of Object.keys(ids)) {
        if (!inScope.has(lesson)) continue
        await rewritePage(lesson, ids[lesson])
        rewritten++
    }
    log(`rewrote ${rewritten} page file(s)`)

    // 5. Clean up tmp file only on full-set success.
    if (!ONLY && Object.keys(ids).length === entries.length) {
        await fs.unlink(TMP_IDS).catch(() => {})
    }
    log("done")
}

main().catch((e) => {
    err(e.stack || e.message)
    process.exit(1)
})
