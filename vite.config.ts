import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/site-vitrine-keba',

  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],

  },
  build: {
    outDir: 'dist',
  },
});
