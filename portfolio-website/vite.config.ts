import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.png', '**/*.svg', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.webp', `**/*.woff`, `**/*.woff2`, `**/*.eot`, `**/*.ttf`, `**/*.otf`],
  base: "/portfolio-website/",
})
