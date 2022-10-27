import { defineConfig } from 'vitepress';

const base = '/vue-keyboard-trap/';

export default defineConfig({
  lang: 'en',
  base,
  appearance: 'dark',
  title: 'Vue Keyboard Trap',
  description: 'Vue3 and Vue2 directive for keyboard navigation - roving movement and trapping inside container',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Examples', link: '/examples/' },
      { text: 'Links', link: '/links/' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/pdanpdan/vue-keyboard-trap' },
    ],
    editLink: {
      pattern: 'https://github.com/pdanpdan/vue-keyboard-trap/edit/main/docs/:path',
    },
    footer: {
      message: 'MIT Licensed',
      copyright: 'Copyright © 2022-present Dan Popescu',
    },
    outline: [2, 3],
  },
  markdown: {
    lineNumbers: true,
  },
  head: [
    /* eslint-disable object-curly-newline */
    ['link', { rel: 'icon', type: 'image/png', sizes: '128x128', href: `${ base }icons/favicon-128x128.png` }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '96x96', href: `${ base }icons/favicon-96x96.png` }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: `${ base }icons/favicon-32x32.png` }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: `${ base }icons/favicon-16x16.png` }],
    ['link', { rel: 'icon', type: 'image/ico', href: `${ base }favicon.ico` }],
    ['link', { rel: 'apple-touch-startup-image', media: '(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3)', href: `${ base }icons/apple-launch-1284x2778.png` }],
    ['link', { rel: 'apple-touch-startup-image', media: '(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3)', href: `${ base }icons/apple-launch-1170x2532.png` }],
    ['link', { rel: 'apple-touch-startup-image', media: '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)', href: `${ base }icons/apple-launch-828x1792.png` }],
    ['link', { rel: 'apple-touch-startup-image', media: '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)', href: `${ base }icons/apple-launch-1125x2436.png` }],
    ['link', { rel: 'apple-touch-startup-image', media: '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)', href: `${ base }icons/apple-launch-1242x2688.png` }],
    ['link', { rel: 'apple-touch-startup-image', media: '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)', href: `${ base }icons/apple-launch-750x1334.png` }],
    ['link', { rel: 'apple-touch-startup-image', media: '(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3)', href: `${ base }icons/apple-launch-1242x2208.png` }],
    ['link', { rel: 'apple-touch-startup-image', media: '(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2)', href: `${ base }icons/apple-launch-1620x2160.png` }],
    ['link', { rel: 'apple-touch-startup-image', media: '(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)', href: `${ base }icons/apple-launch-1536x2048.png` }],
    ['link', { rel: 'apple-touch-startup-image', media: '(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)', href: `${ base }icons/apple-launch-1668x2224.png` }],
    ['link', { rel: 'apple-touch-startup-image', media: '(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)', href: `${ base }icons/apple-launch-1668x2388.png` }],
    ['link', { rel: 'apple-touch-startup-image', media: '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)', href: `${ base }icons/apple-launch-2048x2732.png` }],
  ],
});
