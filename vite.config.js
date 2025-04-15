//vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/phase-2-code-challenge/', // <-- MUST match your GitHub repo name
  build: {
    outDir: 'docs' // Build directly into the docs folder
  },
  plugins: [react()],
})


