<template>
  <h1>Car</h1>
</template>

<script setup lang="ts">
import {emitter} from "@/utils/mitt"
onMounted(()=>{
  emitter.emit("updateTitle","购物车")
})
</script>

<style lang='less' scoped> 

</style>