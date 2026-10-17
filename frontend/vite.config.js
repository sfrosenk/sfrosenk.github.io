import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // This repo is a <username>.github.io user site, which GitHub Pages
  // serves from the domain root — keep base as "/".
  base: "/",
})
