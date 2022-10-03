<template>
  <div class="details">
    <Header titleMsg="商品详情"></Header>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in shopSwiperData" :key="item.id">
        <img :src="item.imgs" alt="" />
      </van-swipe-item>
    </van-swipe>
    <div class="price">
    <div class="left">
      <text>￥12313</text>
      <text>￥12313</text>
    </div>
    <div bindtap="pintuan" class="right">
      <text >拼团更优惠</text>
    </div>
  </div>
  <div class="info">
    <div class="desc1">
      <div class="ziying">微商城自营</div>
      <div class="title">q2312313/1313232313</div>
      <div class="select">
        <div>
          <van-icon class="icons" name="back-top" />推荐
        </div>
        <div>
          <van-icon  class="icons" name="medal-o" />积分购
        </div>
        <div>
          <van-icon  class="icons" name="share-o" />
          分享
        </div>
      </div>
    </div>
    <div class="tip">--商品详情--</div>
    <div class="detailDesc">{{shopInfo.detailDesc}}</div>
    <div class="bottom"></div>
    <van-goods-action>
      <van-goods-action-icon open-type="contact" icon="chat-o" text="客服" />
      <van-goods-action-icon icon="cart-o" text="购物车" bindtap="tiaoCar" />
      <van-goods-action-icon icon-class="{{isCollect?'collectIcon':''}}" icon="{{isCollect?'star':'star-o'}}" text="{{isCollect?'已收藏':'收藏'}}" bindtap="clickCollect" />
      <!--<van-goods-action-icon wx:if="{{isCollect}}" icon="star" text="收藏" bindtap="clickCollect" />-->
      <van-goods-action-button  text="加入购物车" bindtap="addCar" type="danger" />
      <!--<van-goods-action-button text="立即购买" bindtap="goPay" />-->
    </van-goods-action>
    <div class="tip like">--猜你喜欢--</div>
    <shop-item-search shopData="{{likeData}}"></shop-item-search>
  </div>
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
      padding: 1.875rem;
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
