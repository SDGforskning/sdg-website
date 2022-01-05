import { sidebarNO, sidebarEN } from "./sidebar"
import type { DefaultThemeOptions } from '@vuepress/theme-default'

module.exports = {
  // site config
  lang: 'no-NB',
  title: 'SDG',
  description: 'This is my first VuePress site',
  // theme and its config
  theme: '@vuepress/theme-default',
  base: '/',
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'no-NB',
      title: 'SDG',
      description: 'Norsk beskrivelse',
    },
    '/en/': {
      lang: 'en-US',
      title: 'SDG',
      description: 'Engelsk beskrivelse',
    },
  },
  themeConfig: {
    docsDir: 'docs',
    //logo: 'https://vuejs.org/images/logo.png',
    contributors: false,
    locales: {
      '/': {
        selectLanguageText: "Språk",
        selectLanguageName: 'Norsk',
        sidebar: sidebarNO,
      },
      '/en/': {
        selectLanguageName: 'English',
        sidebar: sidebarEN,
      },
    },
    navbar: [
      // NavbarItem
      {
        text: 'FNs bærekraftsmål',
        link: 'https://www.fn.no/om-fn/fns-baerekraftsmaal',
      },
    ],
  },
}