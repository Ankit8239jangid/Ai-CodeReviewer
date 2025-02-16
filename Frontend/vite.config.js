import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  envPrefix: 'VITE_', // Ensures Vite reads environment variables starting with VITE_
})
