import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import { splitVendorChunkPlugin } from 'vite'
const { resolve } = require('path')
// https://vitejs.dev/config/
export default defineConfig({
  server:{
    host:true
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      }
    }
  },
  plugins: [react(),splitVendorChunkPlugin(),
    VitePWA({
    includeAssets: ['/favicon.svg', '/favicon.ico', '/robots.txt', '/apple-touch-icon.png'],  
      manifest: {
        name: 'Potfolio',
        short_name: 'Potfolio',
        description: 'This is our company portfolio.',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/App_icon192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/App_icon512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/App_icon512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          }
        ]},
        workbox: {
          cleanupOutdatedCaches: true,
          sourcemap: true 
        }
  })]
})
