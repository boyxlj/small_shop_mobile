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
    <view class="logos"><van-tag size="large" round type="danger" >微商城自营店</van-tag><view class="success">item.type=='2'?'等待付款':'交易成功'</view></view>
    <view class="shopList" bindtap="tiaoDetail" data-detailId="{{item.detailId}}" wx:for="{{item.orderList}}" wx:key="orderId" >
      <image src="{{item.titleImg}}"></image>
      <view class="right">
   <!--  <view class="title">{{item.title}}</view>-->
        <view class="title">{{1213}}/{{13213}}</view> 
        <view class="price"><text>￥{{123213}}</text><text>x{{123132}}</text></view>
      </view>
    </view>
    <view class="btns">
      <van-button  size="small" bind:click="delete" data-orderNumber="{{item.orderNumber}}" round>删除订单</van-button>
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
  .box{
  width: 100%;
  min-height: 300rpx;
  // background-color: skyblue;
  padding: 0 20rpx;
  box-sizing: border-box;
  background-clip: content-box;
  margin-top: 20rpx;
  .item{
    width: 100%;
    min-height:420rpx ;
    background-color: #fff;
    overflow: hidden;
    border-radius: 20rpx;
    padding: 25rpx;
    box-sizing: border-box;
    margin-bottom: 30rpx;
    .logos{
      margin: 10rpx 0 15rpx 15rpx;
      display: flex;
      justify-content: space-between;
      .success{
          color: red;
      }
    }
  }
  .shopList{
    height: 200rpx;
    width: 100%;
    display: flex;
    // background-color: red;
    justify-content: flex-start;
    padding: 10rpx;
    box-sizing: border-box;
    margin-bottom: 15rpx;
    image{
      width: 180rpx;
      height: 180rpx;
    }
    .right{
      flex: 1;
      padding: 0 15rpx;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .title{
        font-size: 30rpx;
        height: 147rpx;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        overflow: hidden;
        -webkit-box-orient: vertical;
        padding-bottom: 8rpx;
      }
      .price{
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        text{
          &:first-child{
            font-size: 40rpx;
            color: red;
          }
        }
      }
    }
  }
  .btns{
    display: flex;
    justify-content: flex-end;
    margin-top: 20rpx;
  }
}
}
</style>