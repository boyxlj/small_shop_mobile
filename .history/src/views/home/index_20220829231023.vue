<template>
  <h1>Home</h1>
</template>

<script setup lang="ts">
import {emitter} from "@/utils/mitt"
onMounted(()=>{
  emitter.emit("updateTitle","分类")
})
</script>

<style lang='less' scoped> 

</style>