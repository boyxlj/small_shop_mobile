import { createRouter, createWebHistory } from "vue-router"
import {routes}  from "./routes"
 const router =  createRouter({
  routes: routes,
  history: createWebHistory(),
})

router.beforeEach((from,to,next)=>{
  const userInfo = localStorage.getItem("userInfo")
  if(from.fullPath==="/login"){
    localStorage.setItem("path",to.fullPath)
  }
  if(from.path==="/login" && !userInfo && to.path==="/shop/car"){
    next("/shop/profile")
  }
  next()
})


export default router
