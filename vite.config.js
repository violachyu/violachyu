// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/violachyu/', 
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        details: 'details/index.html',
      },
    },
  },
});
