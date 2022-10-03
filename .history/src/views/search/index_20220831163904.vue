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
    <van-search v-model="key" @search="search" placeholder="请输入搜索关键词" />
</template>

<script setup lang="ts">
const key = ref("")
const search = ()=>{
  console.log("开始搜索")
}
</script>

<style lang='less' scoped> 

</style>