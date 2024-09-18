import { NodePackageImporter } from 'sass-embedded';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],

  publicDir: './src/public/',

  css: {
    preprocessorOptions: {
      sass: {
        api: 'modern',
        importers: [new NodePackageImporter()],
      },
    },
  },

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
    optimizeDeps: {
      exclude: ['vue-demi'],
    },
    rollupOptions: {
      external: [
        '@vue/composition-api',
        'vue',
        'vue-demi',
      ],
      output: {
        globals: {
          vue: 'Vue',
          'vue-demi': 'VueDemi',
        },
        exports: 'named',
        sourcemapExcludeSources: true,
      },
    },
  },
});
