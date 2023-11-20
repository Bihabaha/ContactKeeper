import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
  // Add the jsx option to handle JSX in .js files
  jsx: 'react',
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
      "/api/contacts": "http://localhost:4000/", // the address backend for contacts
      "/api/user/signup": "http://localhost:4000/", // the address backend for signup
      "/api/user/login": "http://localhost:4000/", // the address backend for login
      "/api/user/contacts/:id": "http://localhost:4000/", // 

    },

    
    "scripts": {
      "preview": "vite preview --port 8080"
    }
  
  }
})
