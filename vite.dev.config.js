import { NodePackageImporter } from 'sass-embedded';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],

  css: {
    preprocessorOptions: {
      sass: {
        api: 'modern',
        importers: [new NodePackageImporter()],
      },
    },
  },
});
