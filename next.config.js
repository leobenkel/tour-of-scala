
const withPWA = require('next-pwa')

module.exports = withPWA({
    target: "serverless",
    pwa: {
        dest: 'public',
        disable: process.env.NODE_ENV === 'development',
        publicExcludes: [

        ],
        cacheOnFrontEndNav: true,
        skipWaiting: false,
        register: false,
    }
})
