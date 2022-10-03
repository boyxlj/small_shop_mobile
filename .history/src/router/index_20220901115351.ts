import { createRouter, createWebHistory } from "vue-router"
import {routes}  from "./routes"
 const router =  createRouter({
  routes: routes,
  history: createWebHistory(),
})

router.beforeEach((from,to,next)=>{
  // console.log(from,to)
  if(to.path==="/login"){
    console.log(from.path)
    localStorage.setItem("path",from.path)
  }
  // if(from.path==="/login"){
  //   localStorage.removeItem("path")
  // }
  next()
})


export default router
