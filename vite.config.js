import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      // Fix framer-motion internal .mjs resolution (Netlify/Rollup can fail to resolve)
      './utils/use-composed-ref.mjs': path.resolve(
        __dirname,
        'node_modules/framer-motion/dist/es/utils/use-composed-ref.mjs'
      ),
    },
  },
  optimizeDeps: {
    include: ['motion', 'framer-motion'],
  },
})
