import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const {resolve} = require("path")

export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
      "@":resolve(__dirname,"./src")
    }
  }
})
