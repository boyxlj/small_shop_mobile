<template>
  <keep-alive>
    <div class="search">
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
    <van-sticky :offset-top="50">
    <van-search class="searchs" v-model="key" @search="search" @blur="search" placeholder="请输入搜索关键词" />
  </van-sticky>
    <ShopItem :indexShopData="searchShopData" :noTitle="true"></ShopItem>
    </div>
  
  </keep-alive>
</template>

<script setup lang="ts">
  import {getSearchShop} from "@/api/request"
  import {IIndexData,ISearch} from "@/types/shop"
import { Toast } from "vant";
const key = ref("")
const searchShopData = ref<IIndexData[]>([])
const search =async ()=>{
  if(!key.value) return Toast.fail("请先输入搜索关键字") 
  console.log("开始搜索",key.value)
  const obj:ISearch = {
    key :key.value,
    pageOn:1,
    pageCount:50
  }
  const {data:res} = await getSearchShop(obj)
  console.log(res)
  if(res.code!=200){
    searchShopData.value = []
    return 
  } 
  searchShopData.value = res.data
  
}
</script>

<style lang='less' scoped> 
.search{
  background: #f3f2f2;
  min-height: 100vh;
  .searchs{
    position: sticky;
    top: 0;
  }

}
</style>