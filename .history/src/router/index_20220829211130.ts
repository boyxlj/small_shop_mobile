import { createRouter,createWebHashHistory } from "vue-router"
const  Home  = ()=>import("@/views/home/index.vue")
const  About  = ()=>import("@/views/about/index.vue")

const routes = [
  {
    path:"/home",
    component:Home
  },
  {
    path:"/about",
    component:Home
  },
] 

export default createRouter({
  routes:[],
  history:createWebHashHistory(),

})
