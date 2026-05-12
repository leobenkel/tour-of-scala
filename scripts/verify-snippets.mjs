#!/usr/bin/env node
// Verify a Scastie snippet renders correctly.
//
// Two checks per lesson:
//   1. Direct Scastie URL (https://scastie.scala-lang.org/<base64UUID>) loads
//      and the editor contains a distinctive marker string from the source.
//   2. The local Tour-of-Scala dev page (/scala/<lesson>) loads, the
//      "Load Exercise" button is clicked, and the embedded editor renders
//      with the same marker text. Skipped if --no-local is passed.
//
// Usage:
//   node scripts/verify-snippets.mjs --only=try
//   node scripts/verify-snippets.mjs                  # verify every lesson with a known new ID
//   BASE_URL=http://localhost:4000 node scripts/verify-snippets.mjs --only=try
//   node scripts/verify-snippets.mjs --only=try --no-local   # skip dev-server check
//   node scripts/verify-snippets.mjs --only=try --headed     # show the browser
//
// The script reads the current scastieId out of pages/scala/<lesson>.js — so
// it verifies whatever ID is committed to the repo.

import fs from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { chromium } from "playwright"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.resolve(__dirname, "..")
const SNIPPETS_DIR = path.join(REPO_ROOT, "snippets")
const PAGES_DIR = path.join(REPO_ROOT, "pages", "scala")
const SCASTIE_HOST = "https://scastie.scala-lang.org"
const BASE_URL = process.env.BASE_URL || "http://localhost:4000"

const rawArgs = process.argv.slice(2)
const argv = new Set(rawArgs)
const HEADED = argv.has("--headed")
const NO_LOCAL = argv.has("--no-local")
const ONLY = (() => {
    const eq = rawArgs.find((a) => a.startsWith("--only="))
    if (eq) return eq.slice("--only=".length)
    const i = rawArgs.indexOf("--only")
    if (i !== -1 && rawArgs[i + 1]) return rawArgs[i + 1]
    return null
})()

const log = (...a) => console.log("[verify]", ...a)
const err = (...a) => console.error("[verify]", ...a)

async function listLessons() {
    const files = await fs.readdir(PAGES_DIR)
    return files
        .filter((f) => f.endsWith(".js"))
        .map((f) => f.slice(0, -3))
        .sort()
}

async function readScastieIdFromPage(lesson) {
    const file = path.join(PAGES_DIR, `${lesson}.js`)
    const src = await fs.readFile(file, "utf8")
    const m = src.match(/^const scastieId = "([^"]+)"$/m)
    if (!m) throw new Error(`${file}: no scastieId line found`)
    return m[1]
}

// Pick a non-trivial, distinctive substring from the Scala source so we can
// assert the editor really shows our code, not a default template.
async function pickMarker(lesson) {
    const code = await fs.readFile(
        path.join(SNIPPETS_DIR, `${lesson}.scala`),
        "utf8",
    )
    // Pick a distinctive line near the TOP of the file so CodeMirror has
    // already rendered it (CM6 virtualizes long files). Skip leading
    // comments and blanks; cap at 60 chars to avoid wrapping artifacts.
    const lines = code.split("\n")
    for (const l of lines) {
        const t = l.trim()
        if (!t) continue
        if (t.startsWith("//")) continue
        if (t.length < 8) continue
        return t.slice(0, 60)
    }
    // Fallback
    return code.slice(0, 60)
}

async function checkDirect(page, scastieId, marker) {
    // Owned snippets resolve at /<login>/<base64UUID>/<update>. The bare
    // /<base64UUID> path only works for anonymous snippets.
    const owner = process.env.SCASTIE_OWNER || "leobenkel"
    const url = `${SCASTIE_HOST}/${owner}/${scastieId}/0`
    log(`  direct: ${url}`)
    const resp = await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30_000 })
    if (!resp || !resp.ok()) {
        throw new Error(`HTTP ${resp?.status()} on ${url}`)
    }
    await page.waitForSelector(".cm-content", { timeout: 45_000 })
    try {
        await page.waitForFunction(
            (m) => {
                const el = document.querySelector(".cm-content")
                return el && el.textContent && el.textContent.includes(m)
            },
            marker,
            { timeout: 45_000 },
        )
    } catch (e) {
        const snapshot = await page.evaluate(() => {
            const el = document.querySelector(".cm-content")
            return el ? el.textContent.slice(0, 400) : "(no .cm-content)"
        })
        throw new Error(
            `marker "${marker}" not found in editor. Editor head: ${JSON.stringify(snapshot)}`,
        )
    }
    log(`  direct: ✓ editor contains marker "${marker.slice(0, 40)}..."`)
}

async function checkLocal(page, lesson, marker) {
    const url = `${BASE_URL}/scala/${lesson}`
    log(`  local:  ${url}`)
    const resp = await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30_000 })
    if (!resp || !resp.ok()) {
        throw new Error(`HTTP ${resp?.status()} on ${url}`)
    }
    const loadBtn = page.locator("text=Load Exercise")
    await loadBtn.waitFor({ timeout: 15_000 })
    await loadBtn.click()
    await page.waitForSelector(".scastie.embedded", { timeout: 30_000 })
    // Scastie's embed sometimes fails to inject CodeMirror in dev environments
    // (e.g. when its hard-coded tree-sitter.wasm URL is unreachable). Tolerate
    // that and look for either the CodeMirror content OR any node containing
    // the marker text inside the embed root.
    try {
        await page.waitForFunction(
            (m) => {
                const root = document.querySelector(".scastie.embedded")
                return root && root.textContent && root.textContent.includes(m)
            },
            marker,
            { timeout: 60_000 },
        )
    } catch (e) {
        const snapshot = await page.evaluate(() => {
            const root = document.querySelector(".scastie.embedded")
            return root ? root.textContent.slice(0, 400) : "(no .scastie.embedded)"
        })
        throw new Error(
            `marker "${marker}" not found in embed. Embed root head: ${JSON.stringify(snapshot)}`,
        )
    }
    log(`  local:  ✓ embed contains marker`)
}

async function main() {
    const all = await listLessons()
    const lessons = ONLY ? [ONLY] : all
    if (ONLY && !all.includes(ONLY)) {
        throw new Error(`--only=${ONLY} did not match any lesson`)
    }
    log(`verifying ${lessons.length} lesson(s); local check ${NO_LOCAL ? "DISABLED" : "ENABLED (BASE_URL=" + BASE_URL + ")"}`)

    const browser = await chromium.launch({ headless: !HEADED })
    const ctx = await browser.newContext({ ignoreHTTPSErrors: true })
    const page = await ctx.newPage()
    page.on("pageerror", (e) => err(`  page error: ${e.message}`))
    if (process.env.VERIFY_TRACE) {
        page.on("console", (msg) => log(`  [console.${msg.type()}] ${msg.text()}`))
        page.on("requestfailed", (req) =>
            err(`  request FAILED ${req.method()} ${req.url()} -> ${req.failure()?.errorText}`),
        )
        page.on("response", (resp) => {
            if (resp.status() >= 400) {
                err(`  http ${resp.status()} ${resp.request().method()} ${resp.url()}`)
            }
        })
    }

    const failed = []
    for (const lesson of lessons) {
        log(`\n=== ${lesson} ===`)
        try {
            const id = await readScastieIdFromPage(lesson)
            const marker = await pickMarker(lesson)
            log(`  id=${id}  marker="${marker.slice(0, 40)}..."`)
            await checkDirect(page, id, marker)
            if (!NO_LOCAL) await checkLocal(page, lesson, marker)
        } catch (e) {
            err(`  FAIL ${lesson}: ${e.message}`)
            failed.push({ lesson, error: e.message })
        }
    }

    await browser.close()

    log(`\n=== summary ===`)
    log(`passed: ${lessons.length - failed.length}/${lessons.length}`)
    if (failed.length) {
        for (const f of failed) err(`  - ${f.lesson}: ${f.error}`)
        process.exit(1)
    }
}

main().catch((e) => {
    err(e.stack || e.message)
    process.exit(1)
})
