<template>
  <h1>Category</h1>
</template>

<script setup lang="ts">
  import {emitter} from "@/utils/mitt"
onMounted(()=>{
  emitter.emit("updateTitle","分类")
})
</script>

<style lang='less' scoped> 

</style>