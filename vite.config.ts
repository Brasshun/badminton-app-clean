<<<<<<< HEAD
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
=======
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
>>>>>>> 353563073cd6086fdbd8a1d313e9658f2a55428d

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/badminton-app-clean/',
<<<<<<< HEAD
}) 
=======
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
});
>>>>>>> 353563073cd6086fdbd8a1d313e9658f2a55428d
