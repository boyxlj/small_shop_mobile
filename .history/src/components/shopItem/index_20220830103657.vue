<template>
  <div class="shopItem">
    <div class="item">
      <div class="top"> </div>
      <div class="bottom"> 
        <div class="title">huasdsadjsdadadhasdhhdjashdjahdadad</div>
        <div class="price"></div>
      </div>
    </div>
  </div>

  <div class='box'>
  <div  wx:if="{{item.children.length>0}}" >
    <div class="shop_category"><span>213专区</span></div>
    <div  class='shop'>
      <div  class="shopItem">
        <img  src="" />
        <view class="title">123123-1231231</view>
        <view class="price"><span>￥123123</span><span>￥123213</span> </view>
      </div>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">

</script>

<style lang='less' scoped> 
.shopItem{
  width: 100%;
  min-height: 15.5rem;
  background: skyblue;
  .item{
    width: 45%;
    height: 15.5rem;
    background: #fff;
    border-radius: .625rem;
    padding: .2rem .585rem;
    box-sizing: border-box;
    .top{
      height: 9.6rem;
      background: red;
    }
    .bottom{
      .title{
        word-break: break-all;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2; /* 这里是超出几行省略 */
        overflow: hidden;
      }
    }
  }
}
.box {
  padding-bottom: 180rpx;
  .shop_category{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20rpx;
    text{
      // border: 1px solid red;
      padding: 10rpx 50rpx;
     font-weight: bold;
     background-image: linear-gradient(to right bottom
     ,rgb(241, 33, 33),
     rgb(228, 52, 219),
     black,
     orange);
     -webkit-background-clip: text;
     color: transparent;
     border:1px solid;
      border-image: linear-gradient(red,yellow,blue) 1 10;
      clip-path: inset(0 round 10px);
    }
  }
  .shop {
    width: 100%;
    min-height: 600rpx;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .shopItem {
      width: 49%;
      height: 500rpx;
      border-radius: 10px;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 18px 15px;
      box-sizing: border-box;
      margin-bottom: 20rpx;
      image{
        width: 280rpx;
        height: 350rpx;
        margin-bottom: 25rpx;
        object-fit: cover;
      }
      .title{
        width: 100%;
        // background-color: red;
        word-break: break-all;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2; /* 这里是超出几行省略 */
        overflow: hidden;
        height:95rpx;
        font-size: 28rpx;
      }
      .price{
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin-top: 20rpx;
        align-items: center;
        text{
          &:first-child{
            color: red;
          }
          &:last-child{
            text-decoration: line-through;
            font-size: 26rpx;
          }
        }
      }
      
    }

  }
}
</style>