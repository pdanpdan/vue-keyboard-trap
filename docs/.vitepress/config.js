import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'en',
  base: '/vue-keyboard-trap/',
  title: 'Vue Keyboard Trap',
  description: 'Vue3 and Vue2 directive for keyboard navigation - roving movement and trapping inside container',
  themeConfig: {
    editLinks: true,
    editLinkText: 'Edit on GitHub',
    repo: 'pdanpdan/vue-keyboard-trap',
    docsDir: 'docs',
    docsBranch: 'main',
    logo: '/logo.png',
    lastUpdated: true,
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Examples', link: '/examples/' },
      { text: 'Links', link: '/links/' },
    ],
  },
  markdown: {
    lineNumbers: true,
  },
});
