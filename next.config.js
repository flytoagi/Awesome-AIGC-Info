const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  latex: true
})

module.exports = withNextra({
  i18n: {
    locales: ['zh-CN', 'en-US'],
    defaultLocale: 'zh-CN'
  },
  // domains: [{
  //   domain: 'info.ai4agi.org',
  //   defaultLocale: 'zh-CN'
  // },
  // {
  //   domain: 'info.ai4agi.cn',
  //   defaultLocale: 'zh-CN'
  // }
  // ]
}
)
// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })