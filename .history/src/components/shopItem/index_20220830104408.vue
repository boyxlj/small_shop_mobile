<template>
  <div class="box">
      <div class="shop_category"><span>213专区</span></div>
      <div class="shop">
        <div class="shopItem">
          <img src="" />
          <div class="title">123123-1231231</div>
          <div class="price"><span>￥123123</span><span>￥123213</span></div>
        </div>
      </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.box {
  padding-bottom: 5.625rem;
  .shop_category {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: .625rem;
    span {
      // border: 1px solid red;
      padding: .3125rem 1.5625rem;
      font-weight: bold;
      background-image: linear-gradient(
        to right bottom,
        rgb(241, 33, 33),
        rgb(228, 52, 219),
        black,
        orange
      );
      -webkit-background-clip: text;
      color: transparent;
      border: .0625rem solid;
      border-image: linear-gradient(red, yellow, blue) 1 10;
      clip-path: inset(0 round 10px);
    }
  }
  .shop {
    width: 100%;
    min-height: 18.75rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .shopItem {
      width: 49%;
      height: 15.625rem;
      border-radius: .3125rem;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: .5625rem .4688rem;
      box-sizing: border-box;
      margin-bottom: .625rem;
      img {
        width: 8.75rem;
        height: 10.9375rem;
        margin-bottom: .7813rem;
        object-fit: cover;
      }
      .title {
        width: 100%;
        word-break: break-all;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2; /* 这里是超出几行省略 */
        overflow: hidden;
        height: 2.9688rem;
        font-size: .875rem;
      }
      .price {
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin-top: .625rem;
        align-items: center;
        span {
          &:first-child {
            color: red;
          }
          &:last-child {
            text-decoration: line-through;
            font-size: .8125rem;
          }
        }
      }
    }
  }
}
</style>
