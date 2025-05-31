import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/badminton-app-clean/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/\.(png|jpe?g|gif|svg|ico|webp)$/.test(assetInfo.name)) {
            return `assets/images/[name][ext]`;
          }
          return `assets/[name][ext]`;
        },
        chunkFileNames: 'assets/[name].js',
        entryFileNames: 'assets/index.js'
      }
    }
  }
});
