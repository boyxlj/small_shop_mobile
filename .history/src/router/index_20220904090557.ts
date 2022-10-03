import { createRouter, createWebHistory } from "vue-router"
import {routes}  from "./routes"
 const router =  createRouter({
  routes: routes,
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

router.beforeEach((to,from,next)=>{
  const userInfo = localStorage.getItem("userInfo")
  const authorization:string[] = [
    "/collect",
    "/checkout",
    "/shop/car",
  ]
 
  if(authorization.includes(to.path) && !userInfo){
    next("/login")
  }
  if(to.fullPath==="/login"){
    localStorage.setItem("path",from.fullPath)
  }
  /**
   * 
   * 1.未登录
   * 2.到/shop/car
   * 3.从/login
   */
  if(to.path==="/login"  && from.path==="/shop/car"){
    next("/shop/profile")
  }
  if(userInfo && to.path==="/login"){
    next("/")
  }
  
  if(to.path.includes("/checkout") && from.path!=="/car"){
    next("/")
  }
  next()
})


export default router
