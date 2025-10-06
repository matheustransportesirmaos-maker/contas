import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') // @/ aponta para src/
    }
  },
  build: {
    chunkSizeWarningLimit: 2000 // aumenta limite para evitar warnings
  },
  base: '/' // importante para deploy no Vercel
});
