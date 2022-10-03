<template>
  <Header titleMsg="商品详情"></Header>
</template>

<script setup lang="ts">
  import {getShopDetail} from "@/api/request"
const route = useRoute()
console.log("当前商品Id：",route.query.detailId)
const shopDetail=async (){
  const {data:res}  = await getShopDetail()
  
}
</script>

<style lang='less' scoped> 

</style>