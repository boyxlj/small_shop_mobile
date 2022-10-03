<template>
 <div class="car">
  <div class="content">
    <van-swipe-cell wx:if="{{carList.length}}"  bind:open="onOpen" id="swipe-cell2" right-width="{{ 89 }}" v-for="item in carOrderData" :key="item.detailId"  >
              <div class="item" >
                <div class="tops">
                  <div class="tops_left"><van-checkbox v-model="!item.checked" data-carId="{{item.carId}}" @change="onChangeCheck"></van-checkbox></div>
                  <div class="right"><van-tag size="large" round type="danger" >微商城自营店</van-tag></div>
                </div>
                <div class="center" >
                  <img @click="navigateDetail(item.detailId)" :src="item.titleImg" />
                  <div class="center_right">
                    <div @click="navigateDetail(item.detailId)" class='title'>{{item.title}}</div>
                    <div @click="navigateDetail(item.detailId)" class='descs'> {{item.descs}}</div>
                    <div class='price'>
                      <div>
                        ￥{{item.price *item.num}}
                      </div>
                      <div>
                        <van-stepper   v-model="item.num" max="6" :name="item.carId"  theme="round" button-size="22" disable-input  @change="onChangeNum" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            <template #right>
              <div  class="delete" bindtap="deleteCar" data-carId="{{item.carId}}">删除</div>
            </template>
    </van-swipe-cell>
    <div class="empty" v-if="isEmpty">
      <van-empty img="search" description="您的购物车空空如也" >
      </van-empty>
    </div>
    <div class="likes">
      <div class="tip like">--猜你喜欢--</div>
      <ShopItem :indexShopData="randomShopData" :noTitle="true"></ShopItem>
    <!-- <shop-item-search shopData="{{likeData}}"></shop-item-search> -->
    </div>
  </div>
  
</div>
<div class="haha"> 
  <div class="left">
    <van-checkbox value="{{ allChecked }}" data-carId="{{allChecked}}" bind:change="allSelectChecked">全选</van-checkbox>
  </div>
  <div class="right">
    <div class="right_top">
      <div>已选{{12}}件</div>
       <div>合计:<span>￥{{123213}}</span></div>
    </div>
    <van-button icon="balance-pay" type="danger" bind:click="submitOrder" round>去结算</van-button>
  </div>
    
</div>
</template>

<script setup lang="ts">
  import {getSelectCarShop,updateCarNum} from "@/api/request"
import {emitter} from "@/utils/mitt"
import {ICarOrderData} from "@/types/order"
import {useGetRandomShop} from "@/hooks/shop"
import {Toast} from "vant"
const router =  useRouter()
const randomData = useGetRandomShop();
const { randomShopData } = toRefs(randomData);
onMounted(()=>{
  emitter.emit("updateTitle","购物车")
  const userInfo = localStorage.getItem("userInfo")
  if(!userInfo){
    localStorage.setItem("path","/shop/car")
    router.push("/login")
  }
  carOrder()
})
Toast.allowMultiple();
const isEmpty = ref(false)
const carOrderData = ref<ICarOrderData[]>([])
const userId = localStorage.getItem("userId") as any

//切换多选按钮
const onChangeCheck = async(checked: boolean)=>{
  console.log(checked)
}

//切换数量
const onChangeNum = async(	num: number, detail: { name: number })=>{
  if(num==1){
     Toast("至少购买数量为1")
  }else if(num==6){
     Toast("最多购买数量为6")
  }
  const {data:res}  = await updateCarNum(userId,num,detail.name).finally(()=>{
  }) 
  if(res.code!==200){
    return Toast.fail("服务异常")
  }
  carOrder()
}

//跳转商品详情
const navigateDetail = (detailId:number)=>{
  router.push(`/details?detailId=${detailId}`)
}

//获取购物车订单
const carOrder = async()=>{
  isEmpty.value = false
  const toast =Toast.loading({
   message: '加载中...',
  duration:0,
  forbidClick: true,
  loadingType: 'spinner',
});
  const {data:res} = await getSelectCarShop(userId).finally(()=>{
    toast.clear()
  })
  if(res.code!==200){
    carOrderData.value = []
    isEmpty.value = true
    return 
  }
  const ret = res.data.map((item:ICarOrderData)=>{
    item.checked = false
    return item
  })
  carOrderData.value = ret
    isEmpty.value = false
  console.log(toRaw(carOrderData.value))

}
  
</script>

<style lang='less' scoped> 
.car {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: rgb(240, 240, 240);
  overflow: hidden;
  .content {
    width: 100%;
    padding: 0 .625rem;
    box-sizing: border-box;
    .item {
      width: 100%;
      height: 10.6625rem;
      background-clip: content-box;
      box-sizing: border-box;
      background-color: #fff;
      border-radius: .625rem;
      margin-top: .9375rem;

      .tops{
        display: flex;
        padding: .625rem;
        .tops_left{
          margin-right: .325rem;
        }
      }
      .center{
        display: flex;
        width: 100%;
        padding: 0 .9375rem;
        img{
          width: 6rem;
          height: 6rem;
        }
        .center_right{
          width: 58%;
          margin-left: .3125rem;
          .title{
            width: 100%;
            padding: .35rem 0rpx;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .descs{
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            display: -moz-box;
            -moz-line-clamp: 2;
            -moz-box-orient: vertical;
            word-wrap: break-word;
            word-break: break-all;
            white-space: normal;  
            padding: .16rem 0; 
            font-size: 0.9rem;
          }
          .price{
            margin-top: .4375rem;
            div{
              &:first-child{
                font-size: 1.1875rem;
              }
            }
            width: 100%;
            align-items: center;
            color: red;
            flex-wrap: nowrap;
          display: flex;
          justify-content: space-between;
          }
        }
      }
      
    }
  }

}
.delete{
  height: 100%;
  background-color: red;
  width: 4.6875rem;
  margin-left: .3125rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 1.25rem;
  white-space: .3125rem;
  border-radius: .625rem;
}
.empty{
  margin-top: 3.75rem;
  
}
.likes {
  padding-bottom: 4.375rem;
  margin-top: 2.5rem;
  .tip {
    width: 100%;
    text-align: center;
    margin: .25rem 0 .7813rem;
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
.haha{
  width: 100vw;
  height: 4.375rem;
  background-color: #fff;
  box-shadow: 0 -0.0625rem .125rem #ddd;
  box-sizing: border-box;
  position: fixed;
  bottom:3.05rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 .625rem;
  .left{
    display: flex;
  }
  .right{
    display: flex;
    align-items: center;
    .right_top{
      margin-right: .4688rem;
      display: flex;
      flex-direction: column;
      align-content: center;
      div{
        &:first-child{
          position: relative;
          top: -0.25rem;
        }
        &:last-child{
          position: relative;
          top: -0.4063rem;
          span{
            color: red;
            font-size: 1.25rem;
          }
        }
      }
 
    }
  }
}
// .car{
  
//   .footer{
//     width: 100%;
//     position: fixed;
//     left:0;
//     bottom: 0;
//     right: 0;
//     height: 7.3rem;
//     background: skyblue;
//   }
// }
</style>