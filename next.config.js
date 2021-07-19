
const withPWA = require('next-pwa')

module.exports = withPWA({
    target: "serverless",
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // https://github.com/jsdom/jsdom/issues/3042#issuecomment-879142195
        // https://github.com/konvajs/react-konva/issues/102#issuecomment-308000612
        // https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
        // Important: return the modified config
        config.plugins.push(new webpack.IgnorePlugin(/canvas/, /jsdom$/))
        return config
    },

    pwa: {
        dest: 'public',
        disable: process.env.NODE_ENV === 'development',
        publicExcludes: [

        ],
        cacheOnFrontEndNav: true,
        skipWaiting: false,
        register: false,
    },
})
