// https://github.com/shadowwalker/next-pwa/issues/392#issuecomment-1224458436
//
// NOTE: `next-pwa` injects a webpack config to run Workbox. Next.js 16 uses
// Turbopack by default, which ignores it, so `dev` and `build` pass `--webpack`
// (see package.json scripts). Dropping the service worker would let us move to
// Turbopack.

const withPWA = require("next-pwa")({
    dest: "public",
    // put other next-pwa options here
    publicExcludes: [],
    cacheOnFrontEndNav: true,
    skipWaiting: false,
    register: false,
});

const nextConfig = withPWA({
    reactStrictMode: true,
    // put other next js options here

});

module.exports = nextConfig;