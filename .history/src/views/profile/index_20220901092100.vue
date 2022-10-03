<template>
  <div class="me">
    <div class="top-box">
      <div class="login" wx:if="{{loginSuccess}}">
        <div class="left">
          <image src="{{}}" alt="" />
          <div>{{ 123123 }}</div>
        </div>
        <div class="right">
          <van-icon bindtap="cancalLogin" class="icons" name="cross" />
        </div>
      </div>
      <!-- <div class="login" wx:if="{{!loginSuccess}}">
        <div class="left">
          <image
            src="https://api.helloxlj.top/public/static/file1657851664917400322337.png"
            alt=""
          />
          <div bindtap="clickLogin">立即登录</div>
        </div>
        <div class="right">
          <van-icon bindtap="clickLogin" class="icons" name="play" />
        </div>
      </div> -->
    </div>
    <div class="bottom">
      <div class="collect-box">
        <div class="itemss" bindtap="tiaoCollect">
          <div><van-icon class="iconsss" name="star-o" /></div>
          <span>收藏夹</span>
        </div>
        <div class="itemss" data-msg="关注店铺为空" bindtap="tiaoMoney">
          <div><van-icon class="iconsss" name="notes-o" /></div>
          <span>关注店铺</span>
        </div>
        <div class="itemss" data-msg="浏览记录为空" bindtap="tiaoMoney">
          <div><van-icon class="iconsss" name="underway-o" /></div>
          <span>我的足迹</span>
        </div>
      </div>
      <div class="order">
        <div class="top">
          <span>我的订单</span>
          <div bindtap="tiaoOrder" data-id="0"
            >查看所有订单<van-icon class="icons" name="arrow"
          /></div>
        </div>
        <div class="bottoms">
          <div bindtap="tiaoOrder" data-id="1">
            <van-icon name="paid" />
            <span>待付款</span>
          </div>
          <div bindtap="tiaoOrder" data-id="2">
            <van-icon name="peer-pay" />
            <span>待发货</span>
          </div>
          <div bindtap="tiaoOrder" data-id="3">
           <van-icon name="logistics" />
            <span>待收货</span>
          </div>
          <div bindtap="tiaoOrder" data-id="4">
            <van-icon  name="smile-comment-o" />
            <span>待评价</span>
          </div>
        </div>
      </div>
      <div class="money">
        <div class="top">
          <span>我的资产</span>
          <div bindtap="tiaoMoney" data-id="2"
            >查看我的余额<van-icon class="icons" name="arrow"
          /></div>
        </div>
        <div class="bottoms">
          <div bindtap="tiaoMoney" data-msg="钱包为0">
            <van-icon name="pending-payment" />
            <span>钱包</span>
          </div>
          <div bindtap="tiaoMoney" data-msg="优惠券为空">
           <van-icon name="balance-pay" />
            <span>优惠券</span>
          </div>
          <div bindtap="tiaoMoney" data-msg="积分为0">
            <van-icon name="points" />
            <span>积分</span>
          </div>
          <div bindtap="tiaoMoney" data-msg="充值卡为0">
           <van-icon name="idcard" />
            <span>充值卡</span>
          </div>
        </div>
      </div>
      <div class="likes">
        <div class="tip like">--猜你喜欢--</div>
        <div class="shopItem">
          <ShopItem :indexShopData="randomShopData" :noTitle="true"></ShopItem>
        </div>
        <shop-item-search shopData="{{likeData}}"></shop-item-search>
      </div>
    </div>
    <!-- <van-dialog style="position: relative; z-index: 999999" id="van-dialog" /> -->
  </div>
</template>

<script setup lang="ts">
import { emitter } from "@/utils/mitt";
import {useGetRandomShop} from  "@/hooks/shop"
onMounted(() => {
  emitter.emit("updateTitle", "我的");
});
const randomData = useGetRandomShop();
const { randomShopData } = toRefs(randomData);
</script>

<style lang="less" scoped>
.me {
  background-color: rgb(240, 240, 240);
  height: 100%;
  min-height: 100%;
  box-sizing: border-box;
  overflow: hidden;
  .top-box {
    width: 100%;
    height: 10.7625rem;
    background-image: linear-gradient(
      to right bottom,
      white,
      rgb(255, 65, 65),
      rgb(253, 88, 37),
      red,
      white
    );
    box-sizing: border-box;
    overflow: hidden;
    
    .login {
      height: 6.25rem;
      width: 100%;
      margin-top: 1.5625rem;
      display: flex;
      padding: 0 1.25rem;
      align-items: center;
      justify-content: space-between;
      box-sizing: border-box;
      .left {
        display: flex;
        justify-content: center;
        align-items: center;
        image {
          width: 4.375rem;
          height: 4.375rem;
          border: .25rem solid #fff;
          border-radius: 50%;
          object-fit: cover;
        }
        div {
          flex: 1;
          margin-left: .8125rem;
          font-size: 1.0563rem;
          width: 50%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: #fff;
        }
      }
      .right {
        .icons {
          font-size: 1.7188rem;
          color: #fff;
        }
      }
    }
  }

  .bottom {
    width: 100%;
    min-height: 4.075rem;
    padding: 0 .625rem;
    box-sizing: border-box;
    .collect-box {
      position: relative;
      top: -2.1875rem;
      background-color: orange;
      background-image: linear-gradient(
        to right bottom,
        rgb(17, 17, 160),
        rgb(59, 59, 238),
        blue
      );
      padding: 1.4063rem 1.875rem;
      box-sizing: border-box;
      border-radius: .625rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 4.6875rem;
      .itemss {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: orange;
        padding: .7813rem 0;
        box-sizing: border-box;
        div {
          .iconsss {
            color: orange;
            font-size: 1.6625rem !important;
          }
        }
        span {
          color: #fff;
          margin-top: .5625rem;
          font-size: .8575rem;
        }
      }
    }

    .order,
    .money {
      width: 100%;
      height: 8.875rem;
      background-color: #fff;
      border-radius: .625rem;
      padding: .625rem .7813rem;
      box-sizing: border-box;
      position: relative;
      top: -1.0938rem;
      .top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 0.0938rem solid #dddddd;
        padding: .5rem 0 .8125rem 0;
        div {
          color: #aaa;
          font-size: .9375rem;
        }
      }

      .bottoms {
        width: 100%;
        display: flex;
        height:5rem;
        justify-content: space-between;
        align-items: center;

       
        div {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: .625rem;
          box-sizing: border-box;
          .van-icon {
            font-size: 1.6125rem;
            margin-bottom: 0.45rem;
          }
          span{
            font-size: .8375rem !important;
          }
        }
      }
    }

    .money {
      margin-top: 1.0313rem;
    }

    .order {
      .bottoms {
        div {
          div {
            // background-color: red;
            -webkit-background-clip: text;
            color: transparent;
          }
        }
      }
    }

    .likes {
      margin-top: 2.5rem;
      .tip {
        width: 100%;
        text-align: center;
        margin: .25rem 0 .7813rem;
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
        box-sizing: border-box;
        overflow: hidden;
      }
      .like {
      }
    }
  }
}
</style>
