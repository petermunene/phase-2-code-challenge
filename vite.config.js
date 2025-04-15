// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/phase-2-code-challenge/', // 👈 must match your GitHub repo name
  plugins: [react()],
})

