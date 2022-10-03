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
      <div class="box">
  <div class="item"  wx:for="{{orderData}}" wx:key="index">
    <div class="logos"><van-tag size="large" round type="danger" >微商城自营店</van-tag><div class="success">item.type=='2'?'等待付款':'交易成功'</div></div>
    <div class="shopList" bindtap="tiaoDetail" data-detailId="{{item.detailId}}" wx:for="{{item.orderList}}" wx:key="orderId" >
      <img src="{{item.titleImg}}" />
      <div class="right">
   <!--  <div class="title">{{item.title}}</div>-->
        <div class="title">{{1213}}/{{13213}}</div> 
        <div class="price"><span>￥{{123213}}</span><span>x{{123132}}</span></div>
      </div>
    </div>
    <div class="btns">
      <van-button  size="small" bind:click="delete" data-orderNumber="{{item.orderNumber}}" round>删除订单</van-button>
      <van-button bind:click="pay" size="small" data-orderNumber="{{item.orderNumber}}"   style="margin-left:20rpx;" wx:if="{{item.type=='2'}}" type="danger" round>立即支付</van-button>
    </div>
  </div>
</div>

  </div>
</template>

<script setup lang="ts">
  import {getSelectOrderAll} from "@/api/request"
  import {IOrderData} from "@/types/order"
import { Toast } from "vant";
  Toast.allowMultiple();
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
const orderData = ref([])
const isEmpty = ref(false)


onMounted(()=>{
  active.value = route.query?.num as any
})


//切换tab
const changeTab = (active:number)=>{
  console.log("切换：,",active)
  selectOrderAll(active)
}

//查询用户订单
const selectOrderAll=async (active:number)=>{
  console.log("当前选择的是：",active)
  if(active==4 || active==3){
    orderData.value = []
    isEmpty.value = true
    return 
  }
  isEmpty.value = false
  const toast =Toast.loading({
   message: '加载中...',
  duration:0,
  forbidClick: true,
  loadingType: 'spinner',
});
  const {data:res} = await getSelectOrderAll(
    localStorage.getItem("userId") as any,active
  ).finally(()=>{
    toast.clear()
  })
  console.log(res)
  if(res.code!==200){
    orderData.value = []
    isEmpty.value = true
    return 
  }
  orderData.value = res.data
    isEmpty.value = false
 
}
</script>

<style lang='less' scoped> 
.order{
  height: 100%;
  min-height: 100vh;
  background-color: #F3F2F2;
  width: 100%;
  box-sizing: border-box;
  .box{
  width: 100%;
  min-height: 9.375rem;
  padding: 0 .625rem;
  box-sizing: border-box;
  background-clip: content-box;
  margin-top: .625rem;
  .item{
    width: 100%;
    min-height:13.125rem ;
    background-color: #fff;
    overflow: hidden;
    border-radius: .625rem;
    padding: .7813rem;
    box-sizing: border-box;
    margin-bottom: .9375rem;
    .logos{
      margin: .3125rem 0 .4688rem .4688rem;
      display: flex;
      justify-content: space-between;
      .success{
          color: red;
      }
    }
  }
  .shopList{
    height: 6.25rem;
    width: 100%;
    display: flex;
    // background-color: red;
    justify-content: flex-start;
    padding: .3125rem;
    box-sizing: border-box;
    margin-bottom: .4688rem;
    img{
      width: 5.625rem;
      height: 5.625rem;
    }
    .right{
      flex: 1;
      padding: 0 .4688rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .title{
        font-size: .9375rem;
        height: 4.5938rem;
        overflow: hidden;
        span-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        overflow: hidden;
        -webkit-box-orient: vertical;
        padding-bottom: .25rem;
      }
      .price{
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        span{
          &:first-child{
            font-size: 1.25rem;
            color: red;
          }
        }
      }
    }
  }
  .btns{
    display: flex;
    justify-content: flex-end;
    margin-top: .625rem;
  }
}
}
</style>