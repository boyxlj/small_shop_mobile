<template>
  <div class="checkout">
    <Navheader  >
      <template #center>
        <div>
          确认订单
        </div>
      </template>
    </Navheader>
    <!-- <page-meta page-style="{{ show ? 'overflow: hidden;' : '' }}"> -->
  <div class="checkoutbox">
    <div class="content">
      <div class="address">
        <div wx:if="{{defaultAddress.length}}" class="top">
          <div class="left">
            <div class="img">
              <van-icon @click="showPopupClick" class="icons" name="map-marked" />
            </div>
            <div class="info" @click="showPopupClick">
              <div class="descAddress">dhsahshshdjakdsadsadsadsadasd</div>
              <div class="phone"><span>{{23131232}}</span><span>{{213123132132132}}</span></div>
            </div>
          </div>
          <div class="right">
            <van-icon @click="showPopupClick" class="iconss" name="arrow" />
          </div>
        </div>
        <div wx:if="{{!defaultAddress.length}}" class="top">
          <div style="height: 120rpx;font-size: 50rpx;line-height: 120rpx; ">请选择收货地址</div>
        </div>
        <div class="bottom">
          <div @click="showPopupClick">
            <van-icon name="add" />
          </div>
          <div @click="showPopupClick">添加/选择
            <van-icon class="iconss" name="arrow" />
          </div>
        </div>

      </div>
      <div class="shop">
        <div class="top">
          <van-tag type="danger" round size="large">微商城自营店</van-tag>
        </div>
        <div class="shopList" bindtap="navigateDetail(item.detailId)" v-for="item in checkoutOrderData" :key="item.detailId">
          <img :src="item.titleImg" />
          <div class="right">
            <div class="title">{{item.title}}</div>
            <!-- <div class="title">{{item.title}}/{{item.descs}}</div> -->
            <div class="price"><span>￥{{item.price}}</span><span>x{{item.num}}</span></div>
          </div>
        </div>
        <div class="peisong">
          <div>配送服务</div>
          <div>快递 包邮 送运费险
            <van-icon class="icon" name="arrow" />
          </div>
        </div>
        <div class="youhui">
          <div>店铺优惠</div>
          <div>暂无优惠
            <van-icon class="icon" name="arrow" />
          </div>
        </div>
        <div class="others">
          <div>订单备注</div>
          <div>无备注
            <van-icon class="icon" name="arrow" />
          </div>
        </div>
      </div>
      <div class="mingxi">
        <div class="title">价格明细</div>
        <div class="info">
          <div class="totalPrice">
            <div class="nums"><span>商品总价</span><span>共 {{totalNum}} 件宝贝</span></div>
            <div style="font-weight: bold;">￥{{totalPrice}}</div>
          </div>
          <div class="youhui">
            <div>店铺优惠</div>
            <div>￥0
              <van-icon class="icon" name="arrow" />
            </div>
          </div>
          <div class="heji">
            <div>合计</div>
            <div style="font-weight: bold;">￥ {{totalPrice}} </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="·">
        <div>共件 {{totalNum}} 商品</div>
        <div class="total"><span>合计:</span><span>￥ {{totalPrice}}</span></div>
      </div>
      <div class="right">
        <van-button @click="submitOrder" round type="danger">
          提交订单
        </van-button>
      </div>
    </div>
    <!-- orderNumber----{{orderNumber}} -->
    <van-popup v-model:show="showPopup" position="bottom" custom-style="height: 90%;" @close="closePopup" closeable>
      <div class="popup">
        <div class="contents">
          <div wx:if="{{addressList.length}}" class="list" wx:for="{{addressList}}" wx:key="addressId">
            <div class="lefts">
              <van-icon name="friends" />
            </div>
            <div class="centents" bindtap="setDefault" data-addressId="{{item.addressId}}">
              <div class="infos"><span class="name">张三</span>
                <span class="phones">{{18812712321}}</span>
                <van-tag plain wx:if="{{item.type=='1'}}" type="danger">默认</van-tag>
              </div>
              <div class="addressInfo">
                {{'河南省南阳市西峡县'}}
              </div>
            </div>
            <div class="rights">
              <van-icon name="edit" class="iconss" />
            </div>
          </div>
          <div wx:if="{{!addressList.length}}" class="emptyss">
            <van-empty img="error" description="您还没有添加收货地址">
              <van-button round type="danger" bindtap="addAddress" class="bottom-button">去添加收货地址</van-button>
            </van-empty>
          </div>
        </div>
      </div>
    </van-popup>
  </div>
<!-- </page-meta> -->
<!-- <van-dialog id="van-dialog" /> -->

<!-- <van-dialog use-slot title="请扫码支付" show="{{ payDialogShow }}" show-cancel-button bind:close="onClose" bind:confirm="queren" confirmButtonspan="我已支付" bind:cancel="cancel">
  <div style="width: 100%;height: 400rpx; padding: 60rpx 0; display: flex;justify-content: center;" class="pays">
    <img style="width: 400rpx;height: 100%;" src="https://api.helloxlj.top/public/static/file165680971959065391023.png" />
  </div>
</van-dialog> -->
  </div>
</template>

<script setup lang="ts">
  import {getSelectConfirmOrder,getDeleteOrder} from "@/api/request"
  import { Toast,Dialog } from "vant";
  import {ICarOrderData} from "@/types/order"
  const route= useRoute()
const showPopup = ref(false)
const totalNum = ref(0)
const totalPrice = ref(0)
const orderNumber = ref()

const carList = route.query.list
// let orderNumber = route.query.orderNumber as any
// console.log(carList,orderNumber)

const checkoutOrderData = ref<ICarOrderData[]>([])

//点击显示收货地址弹出层
const showPopupClick = ()=>{
  showPopup.value = true
}

//点击关闭收货地址弹出层
const closePopup = ()=>{
  showPopup.value = false
}




onMounted(()=>{
  orderNumber.value = route.query.orderNumber
  getOrderDetail()
})

//查询订单详情
const getOrderDetail = async ()=>{
  const {data:res} = await getSelectConfirmOrder(orderNumber.value)
  console.log(res)
  if(res.code!=200) return Toast.fail("订单异常！")
  checkoutOrderData.value = res.data
  totalNum.value = res.totalNum  
  totalPrice.value = res.totalPrice  
  
}


//删除订单
const deleteOrder = async()=>{
  const {data:res} = await getDeleteOrder(orderNumber.value)
  console.log("删除订单：",res)
}
//点击提交订单
const submitOrder= async()=>{
  console.log("点击提交订单")
}



onUnmounted(()=>{
  deleteOrder()
})
</script>

<style lang='less' scoped> 
.checkout{
  height: 100%;
  min-height: 100vh;
  background-color: #F3F2F2;
  width: 100%;
  box-sizing: border-box;
  padding-bottom: .625rem;
  .checkoutbox {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: rgb(240, 240, 240);
  overflow: hidden;

  .content {
    width: 100%;
    padding: 0 .625rem;
    box-sizing: border-box;
    margin-top: .7813rem;

    .address {
      width: 100%;
      height: 6.875rem;
      background-color: #fff;
      border-radius: .4688rem;
      justify-content: space-between;
      align-items: center;
      padding: .625rem .625rem;
      box-sizing: border-box;

      .top {
        display: flex;
        align-items: center;
        .left {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex: 1;
          .img {
            width: 10%;
            height: 2.5rem;
            .icons {
              width: 100%;
              height: 100%;
              object-fit: cover;
              font-size: 1.875rem;
              color: red;
            }
          }
          .info {
            padding: 0 .4688rem;
            width: 100%;
            min-height:3.75rem;
            .descAddress {
              width: 96%;
              font-weight: bold;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              overflow: hidden;
              -webkit-box-orient: vertical;
            }

            .phone {
              color: rgb(105, 102, 102);
              span{
                &:last-child{
                  margin-left: .375rem;
                }
              }
            }
          }
        }
        .right{
          position: relative;
          top: -17rpx;
          width: 1.25rem;
          text-align: right;
        }
      }

      .bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: .25rem;
      }
    }
    .shop{
      width: 100%;
      min-height: 6.25rem;
      background-color: #fff;
      border-radius: .4688rem;
      margin-top: .7813rem;
      padding: .4688rem .625rem;
      box-sizing: border-box;
      .top{
        margin: .25rem 0 .4063rem;
        font-weight: bold;
      }
      .shopList{
        height: 6.25rem;
        width: 100%;
        display: flex;
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
            font-size: 1.0313rem;
            height: 2.8125rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            overflow: hidden;
            -webkit-box-orient: vertical;
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
      .peisong,.youhui,.others{
        width: 100%;
        margin-top:1.4063rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .icon{
          color: #bbb4b4;
        }
        div{
          &:first-child{
            color: rgb(105, 102, 102);
          }
        }
      }
      .others{
        margin-bottom: .625rem;
      }
    }
    .mingxi{
      width: 100%;
      height: 10.625rem;
      padding: .625rem;
      box-sizing: border-box;
      margin-top: .7813rem;
      background-color: #fff;
      border-radius: .475rem;
      margin-bottom: 5.3125rem;
      .title{
        font-weight: bold;
        margin: .25rem 0 .4375rem;
      }
      .info{
        .totalPrice,.youhui,.heji{
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 1.25rem;
          .icon{
            color: #bbb4b4;
          }
          div{
            &:first-child{
              color: rgb(105, 102, 102);
            }
          }
        }
        .nums{
          span{
            &:last-child{
              margin-left: .625rem;
              font-size: .8125rem;
              color: #bbb4b4;
            }

          }
        }
      }
    }
  }
}
.footer{
  width: 100%;
  height: 5rem;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  border-top: .0625rem solid #ddd;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .left{
    .total{
      span{
        &:last-child{
          margin:0 .4688rem 0 .1875rem;
          font-weight: bold;
          color: red;
          font-size: 1.4063rem;
        }
      }
    }
  }
  .right{
    margin-right: .8125rem;
  }
}

.iconss{
  color: #bbb4b4;
}


.popup{
  width: 100%;
  background-color: rgb(240,240,240);
  min-height: 80vh;
  padding-bottom: 1.5625rem;
  overflow-y: scroll;
  .contents{
    width: 100%;
    height: 100%;
    margin-top: 1.25rem;
    padding:  .625rem;
    box-sizing: border-box;
    overflow-y: scroll;
    .list{
      width: 100%;
      height: 6.25rem;
      background-color: #fff;
      border-radius: 15rpx;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: .9375rem;
      box-sizing: border-box;
      margin-bottom: .7813rem;
      .lefts{
        width: 3.125rem;
        font-size: 2.1875rem;
        color: orange;
      }
      .centents{
        flex: 1;
        .infos{
          .name{
            font-weight: bold;
          }
          .phones{
            margin: 0 .3125rem ;
            color: #bbb4b4;
          }
        }
        .addressInfo{
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          overflow: hidden;
          -webkit-box-orient: vertical;
          font-weight: 300;
          font-size: .875rem;
        }
      }
      .rights{
        width: 2.8125rem;
        font-size: 1.5625rem;
        text-align: center;
      }
    }
    .emptyss{
      margin-top: 3.125rem;
    }
  }

}
}
</style>