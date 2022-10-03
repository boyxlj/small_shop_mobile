import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'

const path = require("path")

export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
      "@":path.join(__dirname,"./src")
    }
  }
})
