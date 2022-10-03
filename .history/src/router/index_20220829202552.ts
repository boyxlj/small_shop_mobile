import { createRouter,createWebHashHistory } from "vue-router"
const  Home  = ()=>import("../views/home")
const  About  = ()=>import("../views/about")

const routes = [
  // {
  //   path:"",
  //   component:
  // }
] 

export default createRouter({
  routes:[],
  history:createWebHashHistory(),

})
