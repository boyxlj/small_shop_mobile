<template>
  <div class="me">
    <div class="top-box">
      <div class="tips" bindtap="tiaoProfile">个人中心</div>
      <div class="login" wx:if="{{loginSuccess}}">
        <div class="left">
          <image src="{{}}" alt="" />
          <div>{{ 123123 }}</div>
        </div>
        <div class="right">
          <van-icon bindtap="cancalLogin" class="icons" name="cross" />
        </div>
      </div>
      <div class="login" wx:if="{{!loginSuccess}}">
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
      </div>
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
            <div><van-icon name="paid" /></div>
            <span>待付款</span>
          </div>
          <div bindtap="tiaoOrder" data-id="2">
            <div><van-icon name="peer-pay" /></div>
            <span>待发货</span>
          </div>
          <div bindtap="tiaoOrder" data-id="3">
            <div><van-icon name="logistics" /></div>
            <span>待收货</span>
          </div>
          <div bindtap="tiaoOrder" data-id="4">
            <div><van-icon name="smile-comment-o" /></div>
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
            <div><van-icon name="pending-payment" /></div>
            <span>钱包</span>
          </div>
          <div bindtap="tiaoMoney" data-msg="优惠券为空">
            <div><van-icon name="balance-pay" /></div>
            <span>优惠券</span>
          </div>
          <div bindtap="tiaoMoney" data-msg="积分为0">
            <div><van-icon name="points" /></div>
            <span>积分</span>
          </div>
          <div bindtap="tiaoMoney" data-msg="充值卡为0">
            <div><van-icon name="idcard" /></div>
            <span>充值卡</span>
          </div>
        </div>
      </div>
      <div class="likes">
        <div class="tip like">--猜你喜欢--</div>
        <shop-item-search shopData="{{likeData}}"></shop-item-search>
      </div>
    </div>
    <van-dialog style="position: relative; z-index: 999999" id="van-dialog" />
  </div>
</template>

<script setup lang="ts">
import { emitter } from "@/utils/mitt";
onMounted(() => {
  emitter.emit("updateTitle", "我的");
});
</script>

<style lang="less" scoped>
.me {
  background-color: rgb(240, 240, 240);
  height: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  overflow: hidden;
  .top-box {
    width: 100%;
    height: 482rpx;
    background-image: linear-gradient(
      to right bottom,
      white,
      rgb(255, 65, 65),
      rgb(253, 88, 37),
      red,
      white
    );
    box-sizing: border-box;

    .tips {
      padding-top: 100rpx;
      font-size: 36rpx;
      box-sizing: border-box;
      padding-left: 30rpx;
      color: #fff;
    }

    .login {
      height: 200rpx;
      width: 100%;
      margin-top: 50rpx;
      display: flex;
      padding: 0 40rpx;
      align-items: center;
      justify-content: space-between;
      box-sizing: border-box;
      .left {
        display: flex;
        justify-content: center;
        align-items: center;
        image {
          width: 140rpx;
          height: 140rpx;
          border: 8rpx solid #fff;
          border-radius: 50%;
          object-fit: cover;
        }
        div {
          flex: 1;
          margin-left: 26rpx;
          font-size: 37rpx;
          width: 50%;
          overflow: hidden;
          span-overflow: ellipsis;
          white-space: nowrap;
          color: #fff;
        }
      }
      .right {
        .icons {
          font-size: 55rpx;
          color: #fff;
        }
      }
    }
  }

  .bottom {
    width: 100%;
    min-height: 140rpx;
    padding: 0 20rpx;
    box-sizing: border-box;
    .collect-box {
      position: relative;
      top: -70rpx;
      background-color: orange;
      background-image: linear-gradient(
        to right bottom,
        rgb(17, 17, 160),
        rgb(59, 59, 238),
        blue
      );
      padding: 25rpx 60rpx;
      box-sizing: border-box;
      border-radius: 20rpx;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 150rpx;
      .itemss {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: orange;
        padding: 25rpx 0;
        box-sizing: border-box;
        div {
          .iconsss {
            color: orange;
            font-size: 50rpx !important;
          }
        }
        span {
          color: #fff;
          margin-top: 18rpx;
        }
      }
    }

    .order,
    .money {
      width: 100%;
      height: 300rpx;
      background-color: #fff;
      border-radius: 20rpx;
      padding: 20rpx 25rpx;
      box-sizing: border-box;
      position: relative;
      top: -35rpx;
      .top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 3rpx solid #dddddd;
        padding: 16rpx 0 26rpx 0;
        div {
          color: #aaa;
          font-size: 30rpx;
        }
      }

      .bottoms {
        width: 100%;
        display: flex;
        height: 160rpx;
        justify-content: space-between;
        align-items: center;

        div {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 20rpx;
          box-sizing: border-box;

          div {
            width: 100rpx;
            height: 100rpx;
            // background-color: red;
            font-size: 58rpx;
          }

          span {
            margin-top: 15rpx;
          }
        }
      }
    }

    .money {
      margin-top: 33rpx;
    }

    .order {
      .bottoms {
        div {
          div {
            // color: red;
            background-color: red;
            -webkit-background-clip: span;
            color: transparent;
          }
        }
      }
    }

    .likes {
      margin-top: 80rpx;
      .tip {
        width: 100%;
        span-align: center;
        margin: 8rpx 0 25rpx;
        background-image: linear-gradient(
          to right bottom,
          rgb(241, 33, 33),
          rgb(228, 52, 219),
          black,
          orange
        );
        -webkit-background-clip: span;
        color: transparent;
        font-weight: 540;
        box-sizing: border-box;
        overflow: hidden;
      }
      .like {
        // margin-bottom: 30rpx;
      }
    }
  }
}
</style>
