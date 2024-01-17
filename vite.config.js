import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url))},
      { find: '@assets', replacement: fileURLToPath(new URL('./src/assets', import.meta.url))},
      { find: '@components', replacement: fileURLToPath(new URL('./src/components', import.meta.url))},
      { find: '@router', replacement: fileURLToPath(new URL('./src/router', import.meta.url))},
      { find: '@views', replacement: fileURLToPath(new URL('./src/views', import.meta.url))},
    ]
  },
  base: "/cmlabs-frontend-internship-test"
})
