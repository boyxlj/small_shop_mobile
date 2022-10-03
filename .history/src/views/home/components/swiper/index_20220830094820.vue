<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="item in swiperData" :key="item.id">
      <img :src="item.imgs" alt="" />
    </van-swipe-item>
  </van-swipe>
</template>

<script setup lang="ts">
const props = defineProps({
  swiperData:Array
});
console.log(props);
</script>

<style lang="less" scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 11.875rem;
  text-align: center;
  background-color: #39a9ed;
  .img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }}
</style>
