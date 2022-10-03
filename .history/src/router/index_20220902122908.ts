import { createRouter, createWebHistory } from "vue-router"
import {routes}  from "./routes"
 const router =  createRouter({
  routes: routes,
  history: createWebHistory(),
})

router.beforeEach((from,to,next)=>{
  const userInfo = localStorage.getItem("userInfo")
  if(to.path=="/login"){
    console.log("之前的路径为：",from.path,from.fullPath)
    localStorage.setItem("path",from.path)
  }
  if(to.path==="/login" && !userInfo && from.path==="/shop/car"){
    next("/shop/profile")
  }
  next()
})


export default router
