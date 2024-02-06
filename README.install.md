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

# Add I18n Config
## Add Config
To add multi-language pages to your Nextra application, you need to config i18n in `next.config.js` first:

```js
next.config.js
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx'
})
 
module.exports = withNextra({
  i18n: {
    locales: ['en-US', 'zh-CN', 'de-DE'],
    defaultLocale: 'en-US'
  }
})
```

## Add Middleware
Then, you need to add a `middleware.js` file in the root of your project (related Next.js docs):
```js
export { locales as middleware } from 'nextra/locales'
```
If you already have the middleware defined, you can do this instead:

```js
import { withLocales } from 'nextra/locales'
 
export const middleware = withLocales(request => {
  // Your middleware code...
})
```
Add Locale to Filenames
Then, add the locale codes to your file extensions (required for the default locale too):

/pages
  _meta.en-US.json
  _meta.zh-CN.json
  _meta.de-DE.json
  index.en-US.md
  index.zh-CN.md
  index.de-DE.md
  ...

Configure the Docs Theme
Finally, add the i18n option to your theme.config.jsx to configure the language dropdown:

theme.config.jsx
i18n: [
  { locale: 'en-US', text: 'English' },
  { locale: 'zh-CN', text: '中文' },
  { locale: 'de-DE', text: 'Deutsch' },
  { locale: 'ar-SA', text: 'العربية', direction: 'rtl' }
]