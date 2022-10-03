import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/index"
import "vant/es/toast/style";
createApp(App)
.use(router)
.mount('#app')
