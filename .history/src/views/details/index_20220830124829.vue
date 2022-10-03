<template>
  <Header titleMsg="商品详情"></Header>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item>1</van-swipe-item>
    <van-swipe-item>2</van-swipe-item>
    <van-swipe-item>3</van-swipe-item>
    <van-swipe-item>4</van-swipe-item>
  </van-swipe>
</template>

<script setup lang="ts">
import { getShopDetail, getShopSwiper } from "@/api/request";
import { Toast } from "vant";
import "vant/es/toast/style";
const route = useRoute();
console.log("当前商品Id：", route.query.detailId);
const { detailId } = route.query;
const shopDetailData = ref([]);
const shopSwiperData = ref([]);
onMounted(() => {
  shopDetail();
  shopSwiper();
});

//获取商品基本信息
const shopDetail = async () => {
  const { data: res } = await getShopDetail(detailId);
  if (res.code != 200) return Toast.fail("服务异常！");
  console.log(res);
};

//获取商品轮播
const shopSwiper = async () => {
  const { data: res } = await getShopSwiper(detailId);
  if (res.code != 200) return Toast.fail("服务异常！");
  console.log(res);
};
</script>

<style lang="less" scoped>

  .details{
    .my-swipe {
      .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
    }
  }
</style>
