## Awesome-AIGC-Info




# Start as New Project
## Install
```shell
yarn add next react react-dom nextra nextra-theme-docs
```

> If you already have Next.js installed in your project, you only need to install nextra and nextra-theme-docs as the add-ons.

Add the following scripts in package.json:
```json
package.json
"scripts": {
  "dev": "next",
  "build": "next build",
  "start": "next start"
},
```

You can either start the server with, for example if you use npm, npm run dev, which will run in development mode or npm run build && npm run start for production mode.


## Add Next.js Config

Create the following `next.config.ts` file in your project’s root directory:

```ts
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx'
})
 
module.exports = withNextra()
 
// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })
```

With the above configuration, Nextra can handle Markdown files in your Next.js project, with the specified theme. Other Nextra configurations can be found in [Guide](https://nextra.site/docs/guide).


## Create Docs Theme Config
Lastly, create the corresponding `theme.config.jsx` file in your project’s root directory. This will be used to configure the Nextra Docs theme:

```jsx
export default {
  logo: <span>My Nextra Documentation</span>,
  project: {
    link: 'https://github.com/shuding/nextra'
  }
  // ... other theme options
}
```
Full theme configurations can be found here.

## Ready to Go!
Now, you can create your first MDX page as `pages/index.mdx`:

```mdx
# Welcome to Nextra
 
Hello, world!
```
And run the next or next dev command specified in package.jsonto start developing the project! 🎉