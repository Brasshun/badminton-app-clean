import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/badminton-app-clean/',
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
});
