import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
const path = require("path")

export default defineConfig({
  server:{
    host:true,
    port:3303
  },
  base:"./",
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
    AutoImport({ 
      imports:[
        'vue',
        'vue-router',
      ]
     }),
  ],
  resolve:{
    alias:{
      "@":path.join(__dirname,"./src")
    }
  },
  
})
