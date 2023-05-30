import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

export default defineConfig({
  resolve:{
    alias:{
      '@assets' : path.resolve(__dirname, './src/assets'),
      '@UI' : path.resolve(__dirname, './src/components/UI'),
      '@screens' : path.resolve(__dirname, './src/components/screens'),
    },
  },
  plugins: [react()],
})
