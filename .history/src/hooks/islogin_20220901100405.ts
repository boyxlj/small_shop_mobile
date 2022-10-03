import {ref} from "vue"

export function isLogin(){
  const isLogin = ref(false)
  const userInfo= localStorage.getItem("userInfo")
  if(!userInfo){
    isLogin.value = false
  }else{
    isLogin.value = true
  }
}