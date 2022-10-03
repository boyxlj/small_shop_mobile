<template>
  <div class="checkout">
    <Navheader  >
      <template #center>
        <div>
          确认订单
        </div>
      </template>
    </Navheader>
    <page-meta page-style="{{ show ? 'overflow: hidden;' : '' }}">
  <div class="checkoutbox">
    <div class="content">
      <div class="address">
        <div wx:if="{{defaultAddress.length}}" class="top">
          <div class="left">
            <div class="img">
              <van-icon bindtap="showPopup" class="icons" name="map-marked" />
            </div>
            <div class="info" bindtap="showPopup">
              <div class="descAddress">dhsahshshdjakdsadsadsadsadasd</div>
              <div class="phone"><span>{{23131232}}</span><span>{{213123132132132}}</span></div>
            </div>
          </div>
          <div class="right">
            <van-icon bindtap="showPopup" class="iconss" name="arrow" />
          </div>
        </div>
        <div wx:if="{{!defaultAddress.length}}" class="top">
          <div style="height: 120rpx;font-size: 50rpx;line-height: 120rpx; ">请选择收货地址</div>
        </div>
        <div class="bottom">
          <div bindtap="showPopup">
            <van-icon name="add" />
          </div>
          <div bindtap="showPopup">添加/选择
            <van-icon class="iconss" name="arrow" />
          </div>
        </div>

      </div>
      <div class="shop">
        <div class="top">
          <van-tag type="danger" round size="large">微商城自营店</van-tag>
        </div>
        <div class="shopList" bindtap="tiaoDetail" data-detailId="{{item.detailId}}" wx:for="{{orderList}}" wx:key="detailId">
          <img src="{{item.titleImg}}" />
          <div class="right">
            <div class="title">湖深度sad撒</div>
            <!-- <div class="title">{{item.title}}/{{item.descs}}</div> -->
            <div class="price"><span>￥{{23123}}</span><span>x{{12}}</span></div>
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
            <div class="nums"><span>商品总价</span><span>共 {{123}} 件宝贝</span></div>
            <div style="font-weight: bold;">￥{{123}}</div>
          </div>
          <div class="youhui">
            <div>店铺优惠</div>
            <div>￥0
              <van-icon class="icon" name="arrow" />
            </div>
          </div>
          <div class="heji">
            <div>合计</div>
            <div style="font-weight: bold;">￥ {{12313}} </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="left">
        <div>共件 {{21}} 商品</div>
        <div class="total"><span>合计:</span><span>￥ {{23132}}</span></div>
      </div>
      <div class="right">
        <van-button bind:click="submitOrder" round type="danger">
          提交订单
        </van-button>
      </div>
    </div>
    <!-- orderNumber----{{orderNumber}} -->
    <van-popup show="{{ show }}" position="bottom" custom-style="height: 90%;" bind:close="onClose" closeable>
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
</page-meta>
<!-- <van-dialog id="van-dialog" /> -->

<!-- <van-dialog use-slot title="请扫码支付" show="{{ payDialogShow }}" show-cancel-button bind:close="onClose" bind:confirm="queren" confirmButtonspan="我已支付" bind:cancel="cancel">
  <div style="width: 100%;height: 400rpx; padding: 60rpx 0; display: flex;justify-content: center;" class="pays">
    <img style="width: 400rpx;height: 100%;" src="https://api.helloxlj.top/public/static/file165680971959065391023.png" />
  </div>
</van-dialog> -->
  </div>
</template>

<script setup lang="ts">

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
    padding: 0 20rpx;
    box-sizing: border-box;
    margin-top: 25rpx;

    .address {
      width: 100%;
      height: 220rpx;
      background-color: #fff;
      border-radius: 15rpx;
      justify-content: space-between;
      align-items: center;
      padding: 20rpx 20rpx;
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
            height: 80rpx;
            .icons {
              width: 100%;
              height: 100%;
              object-fit: cover;
              font-size: 60rpx;
              color: red;
            }
          }
          .info {
            padding: 0 15rpx;
            width: 100%;
            min-height: 120rpx;
            // background-color: red;
            .descAddress {
              width: 96%;
              font-weight: bold;
              // background-color: red;
              overflow: hidden;
              span-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              overflow: hidden;
              -webkit-box-orient: vertical;
            }

            .phone {
              color: rgb(105, 102, 102);
              span{
                &:last-child{
                  margin-left: 12rpx;
                }
              }
            }
          }
        }
        .right{
          position: relative;
          top: -17rpx;
          // flex: 1;
          width: 40rpx;
          span-align: right;
        }
      }

      .bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 8rpx;
      }
    }
    .shop{
      width: 100%;
      min-height: 200rpx;
      background-color: #fff;
      border-radius: 15rpx;
      margin-top: 25rpx;
      padding: 15rpx 20rpx;
      box-sizing: border-box;
      .top{
        margin: 8rpx 0 13rpx;
        font-weight: bold;
      }
      .shopList{
        height: 200rpx;
        width: 100%;
        // background-color: red;
        display: flex;
        justify-content: flex-start;
        padding: 10rpx;
        box-sizing: border-box;
        margin-bottom: 15rpx;
        img{
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
            font-size: 33rpx;
            height: 90rpx;
            overflow: hidden;
            span-overflow: ellipsis;
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
                font-size: 40rpx;
                color: red;
              }
            }
          }
        }
      }
      .peisong,.youhui,.others{
        width: 100%;
        margin-top:45rpx;
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
        margin-bottom: 20rpx;
      }
    }
    .mingxi{
      width: 100%;
      height: 340rpx;
      padding: 20rpx;
      box-sizing: border-box;
      margin-top: 25rpx;
      background-color: #fff;
      border-radius: 15rpx;
      margin-bottom: 190rpx;
      .title{
        font-weight: bold;
        margin: 8rpx 0 14rpx;
      }
      .info{
        .totalPrice,.youhui,.heji{
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 40rpx;
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
              margin-left: 20rpx;
              font-size: 26rpx;
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
  height: 160rpx;
  // background-color: red;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  // box-shadow: 0 -6rpx 10rpx #ddd;
  border-top: 2rpx solid #ddd;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .left{
    .total{
      span{
        &:last-child{
          margin:0 15rpx 0 6rpx;
          font-weight: bold;
          color: red;
          font-size: 45rpx;
        }
      }
    }
  }
  .right{
    margin-right: 26rpx;
  }
}

.iconss{
  color: #bbb4b4;
}


.popup{
  width: 100%;
  background-color: rgb(240,240,240);
  // overflow: ;
  min-height: 100vh;
  padding-bottom: 50rpx;
  overflow-y: scroll;
  .contents{
    width: 100%;
    height: 100%;
    margin-top: 60rpx;
    // background-color: skyblue;
    padding:  20rpx;
    box-sizing: border-box;
    overflow-y: scroll;
    .list{
      width: 100%;
      height: 200rpx;
      background-color: #fff;
      border-radius: 15rpx;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 30rpx;
      box-sizing: border-box;
      margin-bottom: 25rpx;
      .lefts{
        width: 100rpx;
        font-size: 70rpx;
        color: orange;
      }
      .centents{
        flex: 1;
        .infos{
          .name{
            font-weight: bold;
          }
          .phones{
            margin: 0 10rpx ;
            color: #bbb4b4;
          }
        }
        .addressInfo{
          overflow: hidden;
          span-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          overflow: hidden;
          -webkit-box-orient: vertical;
          font-weight: 300;
          font-size: 28rpx;
        }
      }
      .rights{
        width: 90rpx;
        font-size: 50rpx;
        span-align: center;
      }
    }
    .emptyss{
      margin-top: 100rpx;
    }
  }

}
}
</style>