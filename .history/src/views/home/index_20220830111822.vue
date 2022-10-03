<template>
  <div class="home">
    <Swiper :swiperData="swiperData"></Swiper>
    <ShopItem></ShopItem>
    <ShopItem></ShopItem>
    <ShopItem></ShopItem>
    <ShopItem></ShopItem>
  </div>
</template>

<script setup lang="ts">
import { Toast } from "vant";
import 'vant/es/toast/style';
import { getSwiper } from "@/api/request";
import Swiper from "./components/swiper/index.vue";
import { emitter } from "@/utils/mitt";
import {ISwiper} from "./type/index"
const swiperData = ref<ISwiper[]>([]);

onMounted(() => {
  emitter.emit("updateTitle", "首页");
  swiper();
});

//请求轮播数据
const swiper = async () => {
  const { data: res } = await getSwiper();
  if (res.code != 200) return Toast.fail("服务异常！");
  Toast.success('轮播获取成功');
  swiperData.value = res.data;
};
</script>

<style lang="less" scoped>
  .home{
    width: 100%;
    height: 100%;
    background: skyblue;
    padding: 0 .9375rem;
    box-sizing: border-box;
  }
</style>
