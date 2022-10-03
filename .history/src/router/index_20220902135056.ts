import { createRouter, createWebHistory } from "vue-router"
import {routes}  from "./routes"
 const router =  createRouter({
  routes: routes,
  history: createWebHistory(),
})

router.beforeEach((from,to,next)=>{
  const userInfo = localStorage.getItem("userInfo")
  console.log(from.fullPath,to.fullPath)  //    /login /details?detailId=93
  if(to.fullPath==="/login"){
    console.log("之前的路径为：",from.fullPath)
    localStorage.setItem("path",from.fullPath)
  }
  // if(to.path==="/login" && !userInfo && from.path==="/shop/car"){
  //   next("/shop/profile")
  // }
  next()
})


export default router
