<template>
  <h1>Car</h1>
</template>

<script setup lang="ts">
import {emitter} from "@/utils/mitt"
const router =  useRouter()
onMounted(()=>{
  emitter.emit("updateTitle","购物车")
  const userInfo = localStorage.getItem("userInfo")
  if(!userInfo){
    // router.push("/login")
  }
})
</script>

<style lang='less' scoped> 

</style>