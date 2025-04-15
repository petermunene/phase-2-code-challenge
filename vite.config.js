import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'expense-tracker' with your actual repo name if different
export default defineConfig({
  base: '/phase-2-code-challenge/',
  plugins: [react()],
})
