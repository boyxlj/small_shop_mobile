<template>
  <div class="car">
    <h1>Car</h1>
    <div class="footer">
      
    </div>
  </div>
</template>

<script setup lang="ts">
import {emitter} from "@/utils/mitt"
const router =  useRouter()
onMounted(()=>{
  emitter.emit("updateTitle","购物车")
  const userInfo = localStorage.getItem("userInfo")
  if(!userInfo){
    localStorage.setItem("path","/shop/car")
    router.push("/login")
  }
})
</script>

<style lang='less' scoped> 
.car{
  
  .footer{
    width: 100%;
    position: fixed;
    left:0;
    bottom: 0;
    right: 0;
    height: 7rem;
    background: skyblue;
  }
}
</style>