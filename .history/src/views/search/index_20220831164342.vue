<template>
   <Navheader  >
      <template #left>
        <div class="left">
          <van-icon  name="arrow-left" />
        </div>
      </template>
      <template #center>
        <div>
          商品搜索
        </div>
      </template>
    </Navheader>
    <van-search v-model="key" @search="search" @blur="search" placeholder="请输入搜索关键词" />
</template>

<script setup lang="ts">
  import {getSearchShop} from "@/api/request"
import { Toast } from "vant";
const key = ref("")
const search =async ()=>{
  console.log("开始搜索")
  if(!key.value) return Toast.fail("请先输入搜索关键字") 
  const {data:res} = await getSearchShop(key.value)
  
  console.log(res)
  
}
</script>

<style lang='less' scoped> 

</style>