import { ref } from "vue"
import { Dialog } from "vant"
import router from "vue-router"
export function useIsLogin() {
  const isLogin = ref(false)
  const userInfo = localStorage.getItem("userInfo")
  if (!userInfo) {
    // isLogin.value = false
    Dialog.confirm({
      title: '温馨提示',
      message:
        '需要进行登录后进行操作，是否跳转登录',
    })
      .then(() => {
        console.log("点击确定")
        router.push("/login")
      })
      .catch(() => { });
  } else {
    isLogin.value = true
  }
}