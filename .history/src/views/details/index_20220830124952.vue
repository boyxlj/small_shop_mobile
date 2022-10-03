<template>
  <div class="details">
    <Header titleMsg="商品详情"></Header>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img src="" alt="" />
      </van-swipe-item>
    </van-swipe>
  </div>
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
.details {
  .my-swipe {
    .van-swipe-item {
      color: #fff;
      font-size: 20px;
      height: 20.5rem;
      text-align: center;
      background-color: #39a9ed;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>
