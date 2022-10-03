<template>
  <h1>details</h1>
</template>

<script setup lang="ts">
const route = useRoute()
console.log("当前商品Id：",route.query.detailId)
</script>

<style lang='less' scoped> 

</style>