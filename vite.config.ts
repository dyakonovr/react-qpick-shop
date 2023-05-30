import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

export default defineConfig({
  resolve:{
    alias:{
      '@assets' : path.resolve(__dirname, './src/assets'),
      '@ui' : path.resolve(__dirname, './src/components/ui')
    },
  },
  plugins: [react()],
})
