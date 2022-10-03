import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
const path = require("path")

export default defineConfig({
  plugins: [
    vue(),
    // viteCommonjs()
  ],
  resolve:{
    alias:{
      "@":path.join(__dirname,"./src")
    }
  }
})
