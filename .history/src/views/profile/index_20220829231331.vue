<template>
  <h1>Profile</h1>
</template>

<script setup lang="ts">
import {emitter} from "@/utils/mitt"
onMounted(()=>{
  emitter.emit("updateTitle","我的")
})
</script>

<style lang='less' scoped> 

</style>