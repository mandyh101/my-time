import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allows external access to the container
    port: 5173, // Default Vite port (can be changed)
    watch: {
      usePolling: true, // Enables polling for file changes
    },
  },
})