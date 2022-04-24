import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@pdanpdan/vue-keyboard-trap/styles': resolve(__dirname, '../src/public/styles/index.sass'),
      '@pdanpdan/vue-keyboard-trap': resolve(__dirname, '../src/exports.js'),
    },
  },
});
