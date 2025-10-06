import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') // @/ aponta para src
    }
  },
  base: '/', // ✅ garante que assets são buscados na raiz no Vercel
  build: {
    chunkSizeWarningLimit: 2000
  }
});
