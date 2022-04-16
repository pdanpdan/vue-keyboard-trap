import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],

  build: {
    target: 'esnext',
    emptyOutDir: true,
    outDir: './dist/dev',
  },
});
