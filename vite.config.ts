/**
 * author Saquib Shaikh
 * created on 03-01-2025-12h-14m
 * github: https://github.com/saquibshaikh14
 * copyright 2025
*/

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    // open: true,
    // host: "0.0.0.0",
  }
})
