<template>
  <div class="home">
    <van-search class="search" @click-input="navigateSearch" disabled placeholder="请输入搜索关键词" />
    <div class="content">
      <Swiper :swiperData="swiperData"></Swiper>
    <ShopItem :indexShopData="indexShopData"></ShopItem>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Toast } from "vant";
import "vant/es/toast/style";
import { getSwiper, getIndexShopData } from "@/api/request";
import Swiper from "./components/swiper/index.vue";
import { emitter } from "@/utils/mitt";
import { ISwiper } from "./type/index";
import {IIndexData} from "@/types/shop"
const router = useRouter()
const swiperData = ref<ISwiper[]>([]);
const indexShopData = ref<IIndexData[]>([]);

onMounted(() => {
  emitter.emit("updateTitle", "微商城");
  swiper();
  indexData();
});

//请求轮播数据
const swiper = async () => {
  const { data: res } = await getSwiper();
  if (res.code != 200) return Toast.fail("服务异常！");
  swiperData.value = res.data;
};

//获取首页商品数据
const indexData = async () => {
  const { data: res } = await getIndexShopData();
  if (res.code != 200) return Toast.fail("服务异常！");
  Toast.success("首页商品数据获取成功");
  indexShopData.value = res.data;
};

//跳转搜索页面
const navigateSearch = ()=>{
  router.push("/sarch")

}
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  min-height: 62.5rem;
  box-sizing: border-box;
  .search{
    position: sticky;
    top: 0;
    z-index: 999;
  }
  .content{
    padding: 0 0.9375rem;

  }
}
</style>
