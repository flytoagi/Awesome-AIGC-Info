const isGithubActions = process.env.GITHUB_ACTIONS || false;
let assetPrefix = "";
let basePath = "";

if (isGithubActions) {
  // 去掉 `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");

  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  latex: true,
  staticImage: true,
  basePath: basePath,
  assetPrefix: assetPrefix,
  
})

module.exports = {
  ...withNextra({
    i18n: {
      locales: ['zh-CN', 'en-US'],
      defaultLocale: 'zh-CN'
    },
    
  }
  ),
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
}

// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })