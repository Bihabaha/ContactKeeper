import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    manifest: true,
    rollupOptions: {
      input: './src/main.jsx',
    },
  },
  server: {
    port: 3000,
    host: 'localhost',
    proxy: {
      "/api/contacts": "http://localhost:4000/", // the address that u serve in the backend 
    },
  }
})
