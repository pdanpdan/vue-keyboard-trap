import { defineConfig } from 'vite';
import { resolve } from 'path';

import { SearchPlugin } from 'vitepress-plugin-search';

export default defineConfig({
  plugins: [
    SearchPlugin({
      preset: 'match',
      tokenize: 'full',
      cache: true,
      context: true,
      language: 'en',
      stemmer: 'en',
      filter: 'en',
      matcher: 'en',
      worker: true,
      limit: 30,
      suggest: true,
      enrich: true,
      bool: 'and',
    }),
  ],
  resolve: {
    alias: {
      '@pdanpdan/vue-keyboard-trap/styles': resolve(__dirname, '../src/public/styles/index.sass'),
      '@pdanpdan/vue-keyboard-trap': resolve(__dirname, '../src/exports.js'),
    },
  },
  css: {
    // preprocessorOptions: {
    //   sass: {
    //     charset: false,
    //   },
    // },
    postcss: {
      plugins: [
        {
          postcssPlugin: 'internal:charset-removal',
          AtRule: {
            charset: (atRule) => {
              if (atRule.name === 'charset') {
                atRule.remove();
              }
            },
          },
        },
      ],
    },
  },
});
