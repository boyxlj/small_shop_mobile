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
      <span>￥12313</span>
      <span>￥12313</span>
    </div>
    <div bindtap="pintuan" class="right">
      <span >拼团更优惠</span>
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
    <div class="detailDesc">detailDesc</div>
    <div class="bottom"></div>
    <!-- <van-goods-action>
      <van-goods-action-icon open-type="contact" icon="chat-o" span="客服" />
      <van-goods-action-icon icon="cart-o" span="购物车" bindtap="tiaoCar" />
      <van-goods-action-icon icon-class="{{isCollect?'collectIcon':''}}" icon="{{isCollect?'star':'star-o'}}" span="{{isCollect?'已收藏':'收藏'}}" bindtap="clickCollect" />
      <van-goods-action-button  span="加入购物车" bindtap="addCar" type="danger" />
    </van-goods-action> -->
    <div class="tip like">--猜你喜欢--</div>
    <!-- <shop-item-search shopData="{{likeData}}"></shop-item-search> -->
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
      span-align: center;
      border: 2px solid #ccc;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .price{
    width: 100%;
    height: 3.75rem;
    background-color: skyblue;
    display: flex;
    .left{
      width: 64%;
      height: 100%;
      background: linear-gradient(to right ,rgb(252, 25, 25),rgb(248, 86, 86));
      display: flex;
      align-items: center;
      font-size: 1.0313rem;
      color: #FFF;
      span{
        &:first-child{
          font-size: 1.5625rem;
          margin-left: .9375rem;
        }
        &:last-child{
          margin-left: 1.4063rem;
          span-decoration: line-through;
        }
      }
    }
    .right{
      width: 36%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgb(250, 208, 215);
      color: rgb(245, 79, 13);
    }
  }
  .info{
    width: 100%;
    min-height: 6.25rem;
    padding: 0 .625rem;
    box-sizing: border-box;
  }
}
</style>
