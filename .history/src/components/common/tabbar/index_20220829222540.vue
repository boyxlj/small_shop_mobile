<template>
  <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000">
    <van-tabbar-item icon="home-o">标签</van-tabbar-item>
    <van-tabbar-item icon="search">标签</van-tabbar-item>
    <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
    <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
 type TabList = {
   icon:string,
   path:string,
   name:string,
 }
 const tabList:TabList[] = [
   {icon:"home-o",
    path:"123",
    name:"首页"
    }
 ]
const active = ref(0);
</script>

<style lang="less" scoped></style>
