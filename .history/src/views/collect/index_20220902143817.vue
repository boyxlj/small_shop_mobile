<template>
  <div class="collect">
    <Navheader  >
      <template #left>
        <div class="left">
          <van-icon  name="arrow-left" />
        </div>
      </template>
      <template #center>
        <div>
          我的收藏
        </div>
      </template>
    </Navheader>
    <view class="collect">
  <view class="contents">
    <view class="items" wx:if="{{collectList.length}}" wx:for="{{collectList}}" wx:key="collectId">
      <view class="logos"><van-tag size="large" round type="danger">微商城自营店</van-tag></view>
    <view class="list" >
      <view class="left"><image src='{{item.titleImg}}'></image></view>
      <view class="right" bindtap="tiaoDetail" data-detailId="{{item.detailId}}">
        <view class="top">{{12313213}}/{{12312313}}</view>
        <view class="bottom"><text>￥{{1111}}</text><text>￥{{22222}}</text></view>
      </view>
    </view>
    <view class="btns">
      <van-button size="small" bind:click="cancelCollect" data-collectId="{{item.collectId}}" round>取消收藏</van-button>
      <van-button bind:click="addCar" size="small" data-detailId="{{item.detailId}}"  type="danger" round>加入购物车</van-button>
    </view>
      </view>
      <view class="empty"  wx:if="{{!collectList.length}}" >
        <van-empty image="error" description="您还没有收藏任何商品" />
      </view>
      <view class="likes">
        <view class="tip like">--猜你喜欢--</view>
      <shop-item-search shopData="{{likeData}}"></shop-item-search>
      </view>
  </view>
</view>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang='less' scoped> 
.collect{
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: rgb(240,240,240);
  overflow: hidden;

  .contents{
    width: 100%;
    min-height: 800rpx;
    padding: 0 20rpx;
    box-sizing: border-box;
    margin-top: 25rpx;
    margin-bottom: 20rpx;
    .items{
      width: 100%;
      background-color: #fff;
      height: 420rpx;
      padding: 30rpx 20rpx;
      box-sizing: border-box;
      border-radius: 20rpx;
      margin-bottom: 30rpx;
      .logos{
      }
      .list{
        width: 100%;
        height: 230rpx;
        display: flex;
        padding: 18rpx ;
        box-sizing: border-box;
        border-radius: 20rpx;
        .left{
          width: 400rpx;
          height: 180rpx;
          image{
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .right{
          display: flex;
          flex-direction: column;
          justify-content:space-between;
          margin-left: 15rpx;
          .top{
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            overflow: hidden;
            -webkit-box-orient: vertical;
          }
          .bottom{
            font-size: 36rpx;
            color: red;
            display: flex;
            justify-content: space-between;
            text{
              &:last-child{
                font-size: 28rpx;
                text-decoration: line-through;
                color:black;
              }
            }
          }
        }
        
      }
      .btns{
        display: flex;
        justify-content: space-between;

      }
    }
    .empty{
      margin-top: 170rpx;
    }
    .likes {
      margin-top: 100rpx;
      .tip {
        width: 100%;
        text-align: center;
        margin: 8rpx 0 25rpx;
        background-image: linear-gradient(to right bottom, rgb(241, 33, 33),
            rgb(228, 52, 219),
            black,
            orange);
        -webkit-background-clip: text;
        color: transparent;
        font-weight: 540;
        box-sizing: border-box;
        overflow: hidden;
      }
      
    }
  }

}
</style>