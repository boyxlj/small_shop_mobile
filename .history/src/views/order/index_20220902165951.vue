<template>
  <div class="order">
    <Navheader>
      <template #left>
        <div class="left">
          <van-icon name="arrow-left" />
        </div>
      </template>
      <template #center>
        <div>我的订单</div>
      </template>
    </Navheader>
    <van-tabs @change="changeTab" v-model:active="active" swipeable>
        <van-tab v-for="item in tabList" :key="item.id" :title="item.name">{{ item.name }}</van-tab>
      </van-tabs>
      <view class="box">
  <view class="item"  wx:for="{{orderData}}" wx:key="index">
    <view class="logos"><van-tag size="large" round type="danger" size="large">微商城自营店</van-tag><view class="success">{{item.type=='2'?'等待付款':'交易成功'}}</view></view>
    <view class="shopList" bindtap="tiaoDetail" data-detailId="{{item.detailId}}" wx:for="{{item.orderList}}" wx:key="orderId" bindtap="tiaoDetail">
      <image src="{{item.titleImg}}"></image>
      <view class="right">
   <!--  <view class="title">{{item.title}}</view>-->
        <view class="title">{{item.title}}/{{item.descs}}</view> 
        <view class="price"><text>￥{{item.price}}</text><text>x{{item.num}}</text></view>
      </view>
    </view>
    <view class="btns">
      <van-button type="" size="small" bind:click="delete" data-orderNumber="{{item.orderNumber}}" round>删除订单</van-button>
      <van-button bind:click="pay" size="small" data-orderNumber="{{item.orderNumber}}"   style="margin-left:20rpx;" wx:if="{{item.type=='2'}}" type="danger" round>立即支付</van-button>
    </view>
  </view>
</view>

  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const active = ref(0);
const tabList = ref<{
  id:number,
  name:string
}[]>([
  {id:0,name:"全部订单"},
  {id:1,name:"待付款"},
  {id:2,name:"待发货"},
  {id:3,name:"待收货"},
  {id:4,name:"待评价"},
])
// console.log(route.query.num)

onMounted(()=>{
  active.value = route.query?.num as any
})


//切换tab
const changeTab = (active:number)=>{
  console.log("切换：,",active)
}
</script>

<style lang='less' scoped> 
.order{
  height: 100%;

}
</style>