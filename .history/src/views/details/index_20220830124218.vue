<template>
  <Header titleMsg="商品详情"></Header>
</template>

<script setup lang="ts">
  import {getShopDetail} from "@/api/request"
const route = useRoute()
console.log("当前商品Id：",route.query.detailId)
const {detailId} = route.query
onMounted(()=>{
  shopDetail()
})
const shopDetail=async ()=>{
  const {data:res}  = await getShopDetail(detailId as number)
  console.log(res)
}
</script>

<style lang='less' scoped> 

</style>