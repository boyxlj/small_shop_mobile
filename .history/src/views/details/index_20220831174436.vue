<template>
  <div class="details" v-for="item in shopDetailData" :key="item.detailId">
    <Navheader  >
      <template #left>
        <div class="left">
          <van-icon  name="arrow-left" />
        </div>
      </template>
      <template #center>
        <div>
          商品详情
        </div>
      </template>
    </Navheader>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in shopSwiperData" :key="item.id">
        <img :src="item.imgs" alt="" />
      </van-swipe-item>
    </van-swipe>
    <div class="price">
      <div class="left">
        <span>￥{{ item.prePrice }}</span>
        <span>￥{{ item.price }}</span>
      </div>
      <div @click="pintuan" class="right">
        <span>拼团更优惠</span>
      </div>
    </div>
    <div class="info">
      <div class="desc1">
        <div class="ziying">微商城自营</div>
        <div class="title">{{ item.title }}/{{ item.descs }}</div>
        <div class="select">
          <div><van-icon class="icons" name="back-top" />推荐</div>
          <div><van-icon class="icons" name="medal-o" />积分购</div>
          <div>
            <van-icon class="icons" name="share-o" />
            分享
          </div>
        </div>
      </div>
      <div class="tip">--商品详情--</div>
      <div class="detailDesc">{{ item.detailDesc }}</div>
      <div class="bottom"></div>
      <div class="tip">--推荐商品--</div>
      <ShopItem :indexShopData="randomShopData" :noTitle="true"></ShopItem>

      <div class="footers">
        <div class="left">
          <div class="select">
            <van-icon  name="chat-o" />
            <span>客服</span>
          </div>
          <div class="select">
            <van-icon name="cart-o" />
            <span>购物车</span>
          </div>
          <div class="select">
            <van-icon name="star-o" />
            <!-- <van-icon name="star" class="icons" /> -->
            <span>收藏</span>
          </div>
        </div>
        <div class="right">
          <div class="addCar">加入购物车</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getShopDetail, getShopSwiper } from "@/api/request";
import { IShopDetails } from "@/types/shop";
import { useGetRandomShop } from "@/hooks/shop";
import { Toast } from "vant";
import ShopItem from "@/components/shopItem/index.vue";
import "vant/es/toast/style";
const route = useRoute();
const router = useRouter();
const randomData = useGetRandomShop();
const { randomShopData } = toRefs(randomData);
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const detailId: number = route.query.detailId;
type TShopSwiper = {
  id: number;
  detailId: number;
  imgs: string;
};
const shopDetailData = ref<IShopDetails[]>([]);
const shopSwiperData = ref<TShopSwiper[]>([]);
onMounted(() => {
  shopDetail();
  shopSwiper();
});

watch(route,()=>{
  if(route.fullPath.includes("/details")){
    console.log("包含details")
    router.go(0)
  }
  // router.go(0)
})


//获取商品基本信息
const shopDetail = async () => {
  const { data: res } = await getShopDetail(detailId);
  if (res.code != 200) return Toast.fail("服务异常！");
  shopDetailData.value = res.data;
};

//获取商品轮播
const shopSwiper = async () => {
  const { data: res } = await getShopSwiper(detailId);
  if (res.code != 200) return Toast.fail("服务异常！");
  shopSwiperData.value = res.data;
};

//点击拼团活动
const pintuan = () => {
  Toast("拼团活动敬请期待!");
};
</script>

<style lang="less" scoped>
.details {
  background: #f3f2f2;
  height: 100%;
  padding-bottom: 2.6rem;
  
  .my-swipe {
    background-color: #fff;
    .van-swipe-item {
      color: #fff;
      font-size: 20px;
      height: 25.5rem;
      width: 100%;
      padding: 1.875rem;
      box-sizing: border-box;
      span-align: center;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .price {
    width: 100%;
    height: 3.75rem;
    background-color: skyblue;
    display: flex;
    .left {
      width: 64%;
      height: 100%;
      background: linear-gradient(to right, rgb(252, 25, 25), rgb(248, 86, 86));
      display: flex;
      align-items: center;
      font-size: 1.0313rem;
      color: #fff;
      span {
        &:first-child {
          font-size: 1.5625rem;
          margin-left: 0.9375rem;
        }
        &:last-child {
          margin-left: 1.4063rem;
          span-decoration: line-through;
        }
      }
    }
    .right {
      width: 36%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgb(250, 208, 215);
      color: rgb(245, 79, 13);
    }
  }
  .info {
    width: 100%;
    min-height: 6.25rem;
    padding: 0 0.625rem;
    box-sizing: border-box;
    .desc1 {
      width: 100%;
      box-sizing: border-box;
      margin: 1.0938rem 0;
      padding: 0.625rem 0.9375rem;
      background-color: #fff;
      border-radius: 0.3125rem;
      .ziying {
        background-color: red;
        width: 5.3125rem;
        text-align: center;
        border-radius: 0.4688rem;
        color: #fff;
        padding: 0.1875rem;
        font-size: 0.9375rem;
      }
      .title {
        word-break: break-all;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2; /* 这里是超出几行省略 */
        overflow: hidden;
        margin: 0.4688rem 0;
      }
      .select {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0.625rem 0 0.4688rem;
        view {
          display: flex;
          justify-content: center;
          align-items: center;
          .icons {
            margin-right: 0.1875rem;
          }
        }
      }
    }
    .tip {
      width: 100%;
      text-align: center;
      margin: 0.625rem 0;
      background-image: linear-gradient(
        to right bottom,
        rgb(241, 33, 33),
        rgb(228, 52, 219),
        black,
        orange
      );
      -webkit-background-clip: text;
      color: transparent;
      font-weight: 540;
    }
    .like {
      margin-bottom: 0.9375rem;
    }
    .detailDesc {
      width: 100%;
      box-sizing: border-box;
      margin: 0.625rem 0;
      padding: 0.9375rem;
      background-color: #fff;
      border-radius: 0.3125rem;
      word-break: break-all;
      text-overflow: ellipsis;
      overflow: hidden;
      margin: 0.4688rem 0;
      min-height: 3.125rem;
    }
    .bottom {
      margin: 1.875rem;
    }
    .footers{
      width: 100%;
      height: 3.75rem;
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      background: #fff;
      border-top: .125rem solid #f0f4f5;
      display: flex;
      .left{
        width: 9.9rem;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        .select{
          display: flex;
          flex-direction: column;
          align-items: center;
          .van-icon{
            font-size: 1.3rem;
          }

          .icons{
            color: rgb(246, 177, 86);
          }
          span{
            font-size: 0.71rem;
            margin-top: .275rem;
          }
        }
      }
      .right{
        flex: 1;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .addCar{
          width: 98%;
          height:75% ;
          margin-right: .605rem;
          border-radius: 1.875rem;
          background-image: linear-gradient(to right,
          red,
          rgb(236, 79, 79)
          );
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: .9375rem;
        }
      }
    }
  }
}
</style>
