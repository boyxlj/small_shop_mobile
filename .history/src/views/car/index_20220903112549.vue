<template>
 <view class="car"  >
  <view class="content">
    <van-swipe-cell wx:if="{{carList.length}}"  bind:open="onOpen" id="swipe-cell2" right-width="{{ 89 }}"  wx:for="{{carList}}" wx:key="detailId" >
      <van-cell-group>
        <view class="item" >
          <view class="tops">
            <view class="tops_left"><van-checkbox value="{{ item.checked }}" data-carId="{{item.carId}}" bind:change="onChangeCheck"></van-checkbox></view>
            <view class="right"><van-tag size="large" round type="danger" size="large">微商城自营店</van-tag></view>
          </view>
          <view class="center">
            <image  bindtap="shopDetail" data-detailId="{{item.detailId}}" src="{{item.titleImg}}"></image>
            <view class="center_right">
              <view  bindtap="shopDetail" data-detailId="{{item.detailId}}" class='title'>{{item.title}}</view>
              <view  bindtap="shopDetail" data-detailId="{{item.detailId}}" class='descs'> {{item.descs}}</view>
              <view class='price'>
                <view>
                  ￥{{item.price*item.num}}
                </view>
                <view>
                  <van-stepper value="{{item.num}}" max="6"  data-carId="{{item.carId}}" bind:change="onChangeNum" />
                </view>
              </view>
            </view>
          </view>
        </view>
      </van-cell-group>
      <view slot="right" class="delete" bindtap="deleteCar" data-carId="{{item.carId}}">删除</view>
    </van-swipe-cell>
    <view class="empty" wx:if="{{!carList.length}}">
      <van-empty image="search" description="您的购物车空空如也" >
      </van-empty>
    </view>
    <view class="likes">
      <view class="tip like">--猜你喜欢--</view>
    <shop-item-search shopData="{{likeData}}"></shop-item-search>
    </view>
  </view>
  
  <van-dialog style="position: relative; z-index: 999999;" id="van-dialog" />
</view>
<view class="haha"> 
  <view class="left">
    <van-checkbox value="{{ allChecked }}" data-carId="{{allChecked}}" bind:change="allSelectChecked">全选</van-checkbox>
  </view>
  <view class="right">
    <view class="right_top">
      <view>已选{{num}}件</view>
       <view>合计:<text>￥{{totalPrice}}</text></view>
    </view>
    <van-button icon="balance-pay" type="danger" bind:click="submitOrder" round>去结算</van-button>
  </view>
    
</view>
</template>

<script setup lang="ts">
import {emitter} from "@/utils/mitt"
const router =  useRouter()
onMounted(()=>{
  emitter.emit("updateTitle","购物车")
  const userInfo = localStorage.getItem("userInfo")
  if(!userInfo){
    localStorage.setItem("path","/shop/car")
    router.push("/login")
  }
})
</script>

<style lang='less' scoped> 
.car{
  
  .footer{
    width: 100%;
    position: fixed;
    left:0;
    bottom: 0;
    right: 0;
    height: 7.3rem;
    background: skyblue;
  }
}
</style>