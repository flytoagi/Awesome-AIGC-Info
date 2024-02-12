/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://info.ai4agi.org',
    generateRobotsTxt: true, // (optional)
    sitemapSize: 14000, //split large sitemap into multiple files.
    // ...other options
}