// Build config for `serwist build`, run from the `postbuild` script after
// `next build` (and after next-sitemap, so sitemap.xml is precached too).
//
// This is Serwist's "configurator" mode: the service worker is compiled as a
// separate esbuild step rather than through a webpack plugin, which is what
// lets this project build with Turbopack.
// https://serwist.pages.dev/docs/next/config

import { serwist } from '@serwist/next/config'


export default serwist({
    swSrc: 'lib/service-worker.js',
    swDest: 'public/sw.js',

    // Every prerendered lesson page is precached, so the whole tour is
    // available offline rather than only the pages already visited.
    precachePrerendered: true,

    // next-pwa was configured with `publicExcludes: []`, i.e. precache all of
    // public/. Keep that, minus the worker's own output and Netlify's
    // _redirects control file, which is not a route.
    globIgnores: ['public/sw.js', 'public/sw.js.map', 'public/_redirects'],
})
