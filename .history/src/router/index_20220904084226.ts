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
  ]
  if(to.fullPath==="/login"){
    localStorage.setItem("path",from.fullPath)
  }
  if(to.path==="/login" && !userInfo && from.path==="/shop/car"){
    next("/shop/profile")
  }
  if(userInfo && to.path==="/login"){
    next("/")
  }
  if(to.path.includes(authorization as any) && !userInfo){
    next("/login")
  }
  if(authorization.includes(to.path) && from.path!=="/car"){
    next("/")
  }
  next()
})


export default router
