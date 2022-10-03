import { createRouter, createWebHistory } from "vue-router"
import {routes}  from "./routes"
 const router =  createRouter({
  routes: routes,
  history: createWebHistory(),
})

router.beforeEach((from,to,next)=>{
  const userInfo = localStorage.getItem("userInfo")
  if(to.path==="/login"){
    console.log(from.path)
    localStorage.setItem("path",from.path)
  }
  if(from.path==="/login"){
    localStorage.removeItem("path")
  }
  if(to.path==="/login" && !userInfo && from.path==="/shop/car"){
    next("/")
  }
  next()
})


export default router
