<template>
  <div class="details">
    <Header titleMsg="商品详情"></Header>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in shopSwiperData" :key="item.id">
        <img :src="item.imgs" alt="" />
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
type TShopSwiper = {
  id:number,
  detailId:number,
  imgs:string
}
const shopDetailData = ref([]);
const shopSwiperData = ref<TShopSwiper[]>([]);
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
  shopSwiperData.value = res.data
};
</script>

<style lang="less" scoped>
.details {
  .my-swipe {
    .van-swipe-item {
      color: #fff;
      font-size: 20px;
      height: 25.5rem;
      width: 100%;
      padding: 2.875rem;
      box-sizing: border-box;
      text-align: center;
      border: 2px solid #ccc;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>
