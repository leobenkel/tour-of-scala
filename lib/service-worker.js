// Service worker source. This file is NOT bundled by Next.js: `serwist build`
// (see serwist.config.mjs) compiles it with esbuild after `next build` and
// writes the result to public/sw.js, substituting the precache manifest for
// `self.__SW_MANIFEST`.

import { defaultCache } from '@serwist/next/worker'
import { Serwist } from 'serwist'


const serwist = new Serwist({
    precacheEntries: self.__SW_MANIFEST,
    runtimeCaching: defaultCache,
    navigationPreload: true,
    clientsClaim: true,

    // A new worker waits instead of taking over immediately, so components/refresh-pop-up.js
    // can offer the reload. `skipWaiting: false` also registers the `SKIP_WAITING` message
    // listener that `Serwist.messageSkipWaiting()` talks to from the page.
    skipWaiting: false,

    // Serve the prerendered 404 for navigations to pages that were never precached.
    fallbacks: {
        entries: [
            {
                url: '/404',
                matcher: ({ request }) => request.destination === 'document',
            },
        ],
    },
})

serwist.addEventListeners()
