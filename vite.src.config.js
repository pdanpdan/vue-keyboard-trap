import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],

  publicDir: './src/public/',

  build: {
    target: 'esnext',
    sourcemap: true,
    emptyOutDir: true,
    outDir: './dist',
    lib: {
      entry: './src/exports.js',
      name: 'VueKeyboardTrap',
      fileName: (format) => `index.${ format }.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
        exports: 'named',
        sourcemapExcludeSources: true,
      },
    },
  },
});
