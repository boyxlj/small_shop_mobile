import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/index"
import "vant/es/toast/style";
import "vant/es/dialog/style";
import { Dialog } from 'vant';

// 全局注册

createApp(App)
.use(Dialog)
.use(router)
.mount('#app')
