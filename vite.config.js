import { defineConfig } from 'vite';

export default defineConfig({
  root: 'outputs',
  build: {
    outDir: '../dist',
    emptyOutDir: true
  }
});
