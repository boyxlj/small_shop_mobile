import {ref} from "vue"
import { Dialog } from "vant" 
import { useRouter } from "vue-router"
const router= useRouter()
export function isLogin(){
  const isLogin = ref(false)
  const userInfo= localStorage.getItem("userInfo")
  if(!userInfo){
    isLogin.value = false
  }else{
    isLogin.value = true
  }
}