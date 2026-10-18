import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        portfolio: fileURLToPath(new URL('./index.html', import.meta.url)),
        sorriso: fileURLToPath(new URL('./demos/sorriso/index.html', import.meta.url)),
        brasa: fileURLToPath(new URL('./demos/brasa/index.html', import.meta.url)),
        vertice: fileURLToPath(new URL('./demos/vertice/index.html', import.meta.url)),
      },
    },
  },
});
