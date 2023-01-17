// https://github.com/iamvishnusankar/next-sitemap
// https://github.com/iamvishnusankar/next-sitemap/issues/404

const config = {
    siteUrl: 'https://tourofscala.com',
    generateRobotsTxt: false,
    sitemapSize: 1000,
    changefreq: 'monthly',
    generateIndexSitemap: false,
    exclude: [
        '/404*',
        '/legalNotice*',
        '/privacyPolicy*',
    ]
}

module.exports = config