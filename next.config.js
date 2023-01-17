// https://github.com/shadowwalker/next-pwa/issues/392#issuecomment-1224458436

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