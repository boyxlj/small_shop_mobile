<template>
  <Header titleMsg="商品详情"></Header>
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

<style lang="less" scoped></style>
