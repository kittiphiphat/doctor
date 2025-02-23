import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Ensure this is correctly imported

export default defineConfig({
  plugins: [react(), tailwindcss()],
})