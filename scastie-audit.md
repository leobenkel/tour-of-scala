# Scastie ID audit

Run: 2026-05-11T21:46:31.443Z

## Scastie embed library (`/embedded.js`)

- HTTP status: 200
- Last-Modified: Tue, 05 May 2026 14:20:56 GMT
- ETag: "1535f9df8836d40"
- Content-Length: null

## Summary

- Lessons: 82
- Unique IDs probed: 164
- Current IDs: 82 not_found
- Previous IDs (from 408ae4d~1): 82 not_found

Status legend:
- `ok` — POST /api/download/<id> returned 200 AND GET /api/snippets/<id> returned a non-empty body. Snippet exists on Scastie.
- `not_found` — POST /api/download/<id> returned 404. Snippet is gone (or never existed).
- `empty` — POST returned 200 but GET returned an empty body. Ambiguous; treat as broken.
- `error_<n>` — unexpected HTTP/fetch error.

## Findings

**Snippets are truly lost. This is not an API shape change.** Scastie's
maintainer ([@rochala](https://github.com/rochala)) confirmed in
[scalacenter/scastie#1204](https://github.com/scalacenter/scastie/issues/1204)
on 2025-11-14:

> "we've cleaned the database of anonymous snippets and from now on they
> will not be stored indefinitely. If someone wants to have persistent
> snippets they now need to login."

And on 2025-11-18:

> "All non-anonymous snippets of users who did not login for 2.5 years
> and did not accept new privacy policy were also deleted... I already
> spent way too long fighting with mongodb before I brought the idea to
> drop all anonymous snippets"

All of tour-of-scala's snippets were created anonymously (PR #31 in
May 2025 and earlier), so they were caught by the November 2025 wipe.
This audit's data is consistent with that statement: both the
post-PR-#31 IDs (created May 2025) and the pre-PR-#31 IDs (created
years earlier) return identical 404s. The 2026-05-05 `embedded.js`
rebuild is unrelated — the data was already gone six months before then.

**Reproducing the screenshot.** The "Scala Method with Arguments"
lesson references `ZDXmAr6wQ4OTcBSHfJCFmw`; that ID returns 404 via the
audit, which matches the user-visible `//snippet not found` in the
editor.

## Implications for tour-of-scala

- The snippets are not coming back. Scastie will not restore them.
- Re-creating them as anonymous snippets on scastie.scala-lang.org
  would only buy time — the new policy is "not stored indefinitely",
  so they would be wiped again.
- Durable options:
  1. **Re-create under a Scastie account.** Snippets owned by a
     logged-in user appear to be retained (with the 2.5-year inactivity
     caveat). The URL shape changes from `/<base64UUID>` to
     `/<login>/<base64UUID>/latest`, which `components/scastie.js`
     would need to support.
  2. **Stop depending on Scastie.** Embed code locally (a static block
     for display + optional "Open in Scastie" link). Removes the
     external dependency entirely.
  3. **Switch to another playground** (scala-cli web, Scala 3
     scastie-alternative, etc.).

## Per-lesson results

| Lesson | Current ID | Current status | Previous ID | Previous status |
| --- | --- | --- | --- | --- |
| _-placeholder | mjfnEbLASjmuk0fZEiBYiQ | not_found (POST 404/42b, GET 200/0b) | y3LB3ugXQKOR4VhY3aaotA | not_found (POST 404/42b, GET 200/0b) |
| _-wildcard | 0P1RceC9SdOe1Pm3Z8c0lA | not_found (POST 404/42b, GET 200/0b) | VJneetExT8uloX6bomOZ7g | not_found (POST 404/42b, GET 200/0b) |
| abstract-class | 9JlGE3QOT6StJzBcc6LlZw | not_found (POST 404/42b, GET 200/0b) | fwuSQ1sSRhC5rURpo5vdvw | not_found (POST 404/42b, GET 200/0b) |
| applicative | OKYzh4QwQFuwLGaNxICYZw | not_found (POST 404/42b, GET 200/0b) | Jmp5pWRLQxeXZwTWT7PpRw | not_found (POST 404/42b, GET 200/0b) |
| apply | 3yTSEMA7SlKhqIoKT261xg | not_found (POST 404/42b, GET 200/0b) | oyx7X5uwQam2xG8ieQt2BQ | not_found (POST 404/42b, GET 200/0b) |
| call-by-name-parameters | JonOPclARiarms4qOZ1aIA | not_found (POST 404/42b, GET 200/0b) | XkgpvxRaQdSnfdO2yWuSOg | not_found (POST 404/42b, GET 200/0b) |
| case-class | J9Wl5OKcRb6LISqNXA4hrQ | not_found (POST 404/42b, GET 200/0b) | 2cLIBX4MTeK7xf7fXBPI4A | not_found (POST 404/42b, GET 200/0b) |
| case-class-copy | vR4QaHcPSjOyqN0lkqJtTA | not_found (POST 404/42b, GET 200/0b) | zJFFFqP7S5Gym4PZzKLVXA | not_found (POST 404/42b, GET 200/0b) |
| case-class-unapply | vadTervdRJCmLlcOFsDWfQ | not_found (POST 404/42b, GET 200/0b) | pDSJjw7QQpSvUqFxWxQDlQ | not_found (POST 404/42b, GET 200/0b) |
| case-object | 0nVUJlV7TO6lnXj4AxRlfw | not_found (POST 404/42b, GET 200/0b) | vzjyjr0WSTOskKtlV1EoDQ | not_found (POST 404/42b, GET 200/0b) |
| challenge-1 | memyuxazQhCBWeMWI5zJHg | not_found (POST 404/42b, GET 200/0b) | xYbhCpOyRGCalWW4CgA6Iw | not_found (POST 404/42b, GET 200/0b) |
| class-new | orcSDcLjRwCuRuRke8sm5w | not_found (POST 404/42b, GET 200/0b) | Yqd2MrzTTJy5OdhDffdyyA | not_found (POST 404/42b, GET 200/0b) |
| companion-objects | wtv124yDQ9yDoSdNgGt66Q | not_found (POST 404/42b, GET 200/0b) | cwwIb13GTha0xT9adIjMqw | not_found (POST 404/42b, GET 200/0b) |
| comparators | iBb50DUtT0WYfzlVbkPomg | not_found (POST 404/42b, GET 200/0b) | 5MhccpxLQiSzOQ8CWjqjwQ | not_found (POST 404/42b, GET 200/0b) |
| constraint-inheritance | QkoJXe3PTyC0ZyupcT0B4Q | not_found (POST 404/42b, GET 200/0b) | 1rovwDJFTRaHBS7e2c2ofg | not_found (POST 404/42b, GET 200/0b) |
| contexts | 2YvBpo1XRQevleQmHm6w6g | not_found (POST 404/42b, GET 200/0b) | IpAmRkEzSOGRRDEFuAp5RA | not_found (POST 404/42b, GET 200/0b) |
| covariance | Xyrln1IZRtyKqCvtBfHVrA | not_found (POST 404/42b, GET 200/0b) | iFi9nYjrT7OfSifQngJZlw | not_found (POST 404/42b, GET 200/0b) |
| curry | pm2hh2y4Roa4ncyCvW59nQ | not_found (POST 404/42b, GET 200/0b) | yOTTk60dS4W0xRVsPMejbg | not_found (POST 404/42b, GET 200/0b) |
| defined-type | sSmyzl5aQcW0iGskJxZIpA | not_found (POST 404/42b, GET 200/0b) | MBpSt9KLQECIxOPK8Phaeg | not_found (POST 404/42b, GET 200/0b) |
| either | caZffM5rS72X8SdfaV23wQ | not_found (POST 404/42b, GET 200/0b) | bzjEzMzhQmSOiJm2bejFkw | not_found (POST 404/42b, GET 200/0b) |
| enumeration | BELSTmvmTde8KrAaAumQZQ | not_found (POST 404/42b, GET 200/0b) | RpzCdEpvSnKsBpI1TsckHw | not_found (POST 404/42b, GET 200/0b) |
| extractor-pattern | WuCy5uDvT1WeeWPg8WcUkg | not_found (POST 404/42b, GET 200/0b) | m2wkxempSUqHNni7KEz1Zg | not_found (POST 404/42b, GET 200/0b) |
| flatmap | LES1ZVP7TSeBoi9KUJCzkA | not_found (POST 404/42b, GET 200/0b) | ldCLOORGSEGwvfDOlUKDWA | not_found (POST 404/42b, GET 200/0b) |
| foldable | Ug8xSEt7Tlq7AJU0HkhLbg | not_found (POST 404/42b, GET 200/0b) | q7avzZbtSreqhyrrdrp1kA | not_found (POST 404/42b, GET 200/0b) |
| foldleft | sk3Ag6h2SAS5LOsxJJsFKw | not_found (POST 404/42b, GET 200/0b) | 1YO5x72fSE686gtMiAxKzQ | not_found (POST 404/42b, GET 200/0b) |
| for-comprehension | FTZpkSrSRAG8WVFHEVCgFw | not_found (POST 404/42b, GET 200/0b) | Ghu5hkwTQsyazXKdcNujTw | not_found (POST 404/42b, GET 200/0b) |
| functor | SxNIO0zvSsyJPr1rnkJJTw | not_found (POST 404/42b, GET 200/0b) | lPfrjWhhQUew9oxzlD0nSw | not_found (POST 404/42b, GET 200/0b) |
| future | t1fKsn4lQVWrzpu359J91g | not_found (POST 404/42b, GET 200/0b) | JkqgIleTS6Sb5Ies2jAKvw | not_found (POST 404/42b, GET 200/0b) |
| generic-trait | U5lfs4yvS82TMygUeHMctg | not_found (POST 404/42b, GET 200/0b) | 1KailbBGTNCH2CDwVFK4fA | not_found (POST 404/42b, GET 200/0b) |
| higher-kind | h4vMQgWDTReGLgIJODIe5g | not_found (POST 404/42b, GET 200/0b) | fC18HjQmT6Gbh5mTox5zbw | not_found (POST 404/42b, GET 200/0b) |
| implicit-class | IVecl2SWQrKJ4BB4tz9wGg | not_found (POST 404/42b, GET 200/0b) | pDE2WSbNTtWv2MetlCCumw | not_found (POST 404/42b, GET 200/0b) |
| implicit-conversion | BCbTdLn4Sl2vSFsNDWn1bg | not_found (POST 404/42b, GET 200/0b) | 2UnR8tnRRky1rrfT1MNDzw | not_found (POST 404/42b, GET 200/0b) |
| implicit-proof | j5KUq7jdTaujb5a5bJEH0g | not_found (POST 404/42b, GET 200/0b) | rPQxPMehSye8cwfa4VU9zg | not_found (POST 404/42b, GET 200/0b) |
| implicit-val | IZZ2VGbPRoWuN2aePc8Lmg | not_found (POST 404/42b, GET 200/0b) | 2u0HgFdmQhmH0WP6aM1dNA | not_found (POST 404/42b, GET 200/0b) |
| infix-notation | i0Ah55lJQMy7XONJ7Kiuqg | not_found (POST 404/42b, GET 200/0b) | 5YZMNrc1R5WjgZlBc772Kw | not_found (POST 404/42b, GET 200/0b) |
| list-filter-method | TMCEMboDQTK2EWUvaiDd5g | not_found (POST 404/42b, GET 200/0b) | EVfJS5WZRDWtIdzPHXOs6w | not_found (POST 404/42b, GET 200/0b) |
| list-flatten | S63YwlmXRh6dvaapW7GV2A | not_found (POST 404/42b, GET 200/0b) | fGhtslb9TiiTQ5brcXpgLg | not_found (POST 404/42b, GET 200/0b) |
| list-of-option-flatten | WxOdhbt5SNaKM5OYilv36Q | not_found (POST 404/42b, GET 200/0b) | WU5TCyfhTLKRPcvMccymZg | not_found (POST 404/42b, GET 200/0b) |
| list-parallel | MMl4M3LDQZisDo5AVXOwWg | not_found (POST 404/42b, GET 200/0b) | 8kl0ZPy6T2ycipzz5iNkSg | not_found (POST 404/42b, GET 200/0b) |
| list-pattern-matching | my7ARfxYS02ArwbEa6U9NQ | not_found (POST 404/42b, GET 200/0b) | i7RNOt1qStGNACeNygqEwQ | not_found (POST 404/42b, GET 200/0b) |
| list-sum-method | Bk9g8XhJSuS5qgXXlsO17A | not_found (POST 404/42b, GET 200/0b) | WkXaFPHSR7q1M4I7xncZFg | not_found (POST 404/42b, GET 200/0b) |
| list-zip | mKhYciyqS362m6ZXaWJ70Q | not_found (POST 404/42b, GET 200/0b) | lMLBr2JBQZGtHCaAoZnlRg | not_found (POST 404/42b, GET 200/0b) |
| literal-identifiers | eGqqiIwaRQOV5jHD55nemg | not_found (POST 404/42b, GET 200/0b) | PpMpUMxaSQyPHkYRKmbRIw | not_found (POST 404/42b, GET 200/0b) |
| main | phsta85kR2alB3IGPoq5eg | not_found (POST 404/42b, GET 200/0b) | Eb9UJewvRlOeORHTpjD5lQ | not_found (POST 404/42b, GET 200/0b) |
| map-for-list | LxP34WAsQyq5gV62cPatkg | not_found (POST 404/42b, GET 200/0b) | mqPBMWVGR5OIpa1J9etlYw | not_found (POST 404/42b, GET 200/0b) |
| method-with-arguments | ZDXmAr6wQ4OTcBSHfJCFmw | not_found (POST 404/42b, GET 200/0b) | P7T6QckdSIKzUFdCdawLEg | not_found (POST 404/42b, GET 200/0b) |
| methods | 4FCkgVNaT7ucVCga5w5qIA | not_found (POST 404/42b, GET 200/0b) | WAa2MFWwQBW2rIPjVNBgEw | not_found (POST 404/42b, GET 200/0b) |
| monad | SCUWq9JcRpComfewCgTSFA | not_found (POST 404/42b, GET 200/0b) | JB0wl7zzQxiefAf4EwfzBA | not_found (POST 404/42b, GET 200/0b) |
| multiple-inheritance | iTqY4AsHScucBLyf9l6j2g | not_found (POST 404/42b, GET 200/0b) | QpCO0GjsTrKBo4wGdIpEJA | not_found (POST 404/42b, GET 200/0b) |
| objects | ZElvNkmkQ02Qr8sY4isiKA | not_found (POST 404/42b, GET 200/0b) | 1b36QjJlRVi02lvrXSLrgw | not_found (POST 404/42b, GET 200/0b) |
| operators | avof8zq6RUi0cVKCxnKY7Q | not_found (POST 404/42b, GET 200/0b) | i2ZSLmI0R7egM6vkvJqKug | not_found (POST 404/42b, GET 200/0b) |
| option | fzBPg5UiSwydGL2dSWKx3A | not_found (POST 404/42b, GET 200/0b) | 77OEvedmT6KHssXPBduEIw | not_found (POST 404/42b, GET 200/0b) |
| option-map | xWLsuNGXQ7uVnaUE35AyAA | not_found (POST 404/42b, GET 200/0b) | Zn7rGMlnSVWfCH3hCnKEhA | not_found (POST 404/42b, GET 200/0b) |
| option-pattern-matching | NE1Z1gdMQwO5ppOJOICodg | not_found (POST 404/42b, GET 200/0b) | PDLP0wHGQKqN5oS2yt6R4g | not_found (POST 404/42b, GET 200/0b) |
| pattern-matching | SnFM3f5GRvCzIvqAWco0jg | not_found (POST 404/42b, GET 200/0b) | 5VQri4WFQ6yrPuBJHNIh5A | not_found (POST 404/42b, GET 200/0b) |
| pattern-matching-at | k1cFwuZdQheviSdQGDDzMw | not_found (POST 404/42b, GET 200/0b) | xsycVjGaSwubwwjAYM688w | not_found (POST 404/42b, GET 200/0b) |
| pattern-matching-for-case-class | DSKkBRgZT0unMgVeiG76XQ | not_found (POST 404/42b, GET 200/0b) | v70vPtVcTWmJb6NBzSAnDg | not_found (POST 404/42b, GET 200/0b) |
| pattern-matching-or | WYfULSwhS12quZ5H6BIkBA | not_found (POST 404/42b, GET 200/0b) | L2xDjw3yTfeVu8BvTlvJuw | not_found (POST 404/42b, GET 200/0b) |
| random | G7e4QwwbQ4WSkcljUzYcwA | not_found (POST 404/42b, GET 200/0b) | jVPerO3XQwWD2dyHZeWgww | not_found (POST 404/42b, GET 200/0b) |
| range | kTjI5evhSLyRQBtPRckawA | not_found (POST 404/42b, GET 200/0b) | 3mkgQBbsRAKu0Yqo3tzoxA | not_found (POST 404/42b, GET 200/0b) |
| recursion | rkgxG7yiSxqHjJAhhKRfqg | not_found (POST 404/42b, GET 200/0b) | Cnic9MRTRE2BgIR3NAC5Zg | not_found (POST 404/42b, GET 200/0b) |
| regex | ofpEC7pYQ6OaAYH4OQfzsQ | not_found (POST 404/42b, GET 200/0b) | I7Vt5quwT2OLFVHbrpyHlw | not_found (POST 404/42b, GET 200/0b) |
| repeated-parameters | gdXHGu2KRUC3yVkBl2FhiQ | not_found (POST 404/42b, GET 200/0b) | t4txyXUBQ16HDTrla2PhZw | not_found (POST 404/42b, GET 200/0b) |
| sealed | 8rWrWX9yQym4w1LxJm56lA | not_found (POST 404/42b, GET 200/0b) | FLCt7eVzRmedD4gb40BpVQ | not_found (POST 404/42b, GET 200/0b) |
| self-referred-type | wKhJFuWwSw2CE38r1JOT1g | not_found (POST 404/42b, GET 200/0b) | 9fDW3IfPTParnRzONDXkkA | not_found (POST 404/42b, GET 200/0b) |
| set | wVSrVCeWSeytlVjX0YOSIQ | not_found (POST 404/42b, GET 200/0b) | Xnga8KMIQimJPP8BwT5VAQ | not_found (POST 404/42b, GET 200/0b) |
| star-parameter | atliFs67TKm6z7r8OSifug | not_found (POST 404/42b, GET 200/0b) | uhVWCfgeREWEbRKVUX639w | not_found (POST 404/42b, GET 200/0b) |
| stream | 5lF704InT2mzBKntjzsU9Q | not_found (POST 404/42b, GET 200/0b) | HXLsbXJQSVSKmS333hXm6w | not_found (POST 404/42b, GET 200/0b) |
| string-format | tMiJL0glR3exHoEdGFKZBQ | not_found (POST 404/42b, GET 200/0b) | G0GDlJ2GQ2O9w05HPQycGA | not_found (POST 404/42b, GET 200/0b) |
| string-interpolation | lwH1J4fdSsWs2JC9b5Hykg | not_found (POST 404/42b, GET 200/0b) | YvHTOaC8SFCFpKzQLmd9ag | not_found (POST 404/42b, GET 200/0b) |
| thread-sleep | BjJXlvkMRtWCqIJ1y1oWrw | not_found (POST 404/42b, GET 200/0b) | W8rybNOdRk29mQwdFVjqNg | not_found (POST 404/42b, GET 200/0b) |
| trait | wNjtWIW8QXy3E3R5D1tNUA | not_found (POST 404/42b, GET 200/0b) | PcemiDBSR1ejWZaPaVxjqQ | not_found (POST 404/42b, GET 200/0b) |
| traversable | 3R7qyi15SqGPmU0yqMfvxQ | not_found (POST 404/42b, GET 200/0b) | ntaMRDzYQ3uMMgXbQZcECg | not_found (POST 404/42b, GET 200/0b) |
| try | SQcoS39XQ3SvkpwJJkCT7w | not_found (POST 404/42b, GET 200/0b) | TgKc6NXwSE2LWikrBm4Qtw | not_found (POST 404/42b, GET 200/0b) |
| tuple | T2FtLvkXR3O8M6P6LCYurQ | not_found (POST 404/42b, GET 200/0b) | TUuvqIPHTc2A3jHNSYMBBQ | not_found (POST 404/42b, GET 200/0b) |
| typeclass | gIyJLpp3QBq2Azewca2sMw | not_found (POST 404/42b, GET 200/0b) | UtjWBavyRMWd7mpfLiXlfQ | not_found (POST 404/42b, GET 200/0b) |
| unapply-magic | IX9WqgZ4SPeTmId5tUX9GQ | not_found (POST 404/42b, GET 200/0b) | 3dUlzSLfRMqUFGOQ1Ms8vA | not_found (POST 404/42b, GET 200/0b) |
| upper-constraint | pnGE3sx2QF618zNKhKhoLw | not_found (POST 404/42b, GET 200/0b) | wYG9m3B3T1qBOuvy5vLjAQ | not_found (POST 404/42b, GET 200/0b) |
| val-lazy-def | r2ZO6YV9TsSQWF5resaN1A | not_found (POST 404/42b, GET 200/0b) | fRqDtrL9Q22S2aB2Pue9mg | not_found (POST 404/42b, GET 200/0b) |
| val-pattern-matching | KpCh2LvkSza9Apd7RaoNEA | not_found (POST 404/42b, GET 200/0b) | aLWSbioJT0ir0qACbt6yCg | not_found (POST 404/42b, GET 200/0b) |
| values | V5hjMfbkSb28UEedNKP2zw | not_found (POST 404/42b, GET 200/0b) | 6EuSjLIMT7KQhdUiB7Nf8Q | not_found (POST 404/42b, GET 200/0b) |
| visibility | Dp3Hyvw4Tiagf7AG6nIuvw | not_found (POST 404/42b, GET 200/0b) | 8lBYPLO0RAGZLT1C7idAuw | not_found (POST 404/42b, GET 200/0b) |
