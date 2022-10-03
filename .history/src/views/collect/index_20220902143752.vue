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
  
}
</style>