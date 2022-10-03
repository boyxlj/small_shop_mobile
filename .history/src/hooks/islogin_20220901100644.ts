import {ref} from "vue"
import { Dialog } from "vant" 
import { useRouter } from "vue-router"
const router= useRouter()
export function isLogin(){
  const isLogin = ref(false)
  const userInfo= localStorage.getItem("userInfo")
  if(!userInfo){
    isLogin.value = false
    Dialog.confirm({
      title: '温馨提示',
      message:
        '需要进行登录后进行操作，是否跳转登录',
    })
      .then(() => {
        router.push("/login")
      })
      .catch(() => {
        // on cancel
      });
  }else{
    isLogin.value = true
  }
}