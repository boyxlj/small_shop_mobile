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
    <div class="collect">
  <div class="contents">
    <div class="items" wx:if="{{collectList.length}}" wx:for="{{collectList}}" wx:key="collectId">
      <div class="logos"><van-tag size="large" round type="danger">微商城自营店</van-tag></div>
    <div class="list" >
      <div class="left"><image src='{{item.titleImg}}'></image></div>
      <div class="right" bindtap="tiaoDetail" data-detailId="{{item.detailId}}">
        <div class="top">{{12313213}}/{{12312313}}</div>
        <div class="bottom"><span>￥{{1111}}</span><span>￥{{22222}}</span></div>
      </div>
    </div>
    <div class="btns">
      <van-button size="small" bind:click="cancelCollect" data-collectId="{{item.collectId}}" round>取消收藏</van-button>
      <van-button bind:click="addCar" size="small" data-detailId="{{item.detailId}}"  type="danger" round>加入购物车</van-button>
    </div>
      </div>
      <div class="empty"  wx:if="{{!collectList.length}}" >
        <van-empty image="error" description="您还没有收藏任何商品" />
      </div>
      <div class="likes">
        <div class="tip like">--猜你喜欢--</div>
      <shop-item-search shopData="{{likeData}}"></shop-item-search>
      </div>
  </div>
</div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang='less' scoped> 
.collect{
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: rgb(240,240,240);
  overflow: hidden;

  .contents{
    width: 100%;
    min-height: 17rem;
    padding: 0 .625rem;
    box-sizing: border-box;
    margin-top: .7813rem;
    margin-bottom: .625rem;
    .items{
      width: 100%;
      background-color: #fff;
      height: 10.125rem;
      padding: .9375rem .625rem;
      box-sizing: border-box;
      border-radius: .625rem;
      margin-bottom: .9375rem;
      .logos{
      }
      .list{
        width: 100%;
        height: 7.1875rem;
        display: flex;
        padding: .5625rem;
        box-sizing: border-box;
        border-radius: .625rem;
        .left{
          width: 12.5rem;
          height: 5.625rem;
          image{
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .right{
          display: flex;
          flex-direction: column;
          justify-content:space-between;
          margin-left: .4688rem;
          .top{
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            overflow: hidden;
            -webkit-box-orient: vertical;
          }
          .bottom{
            font-size: 1.125rem;
            color: red;
            display: flex;
            justify-content: space-between;
            span{
              &:last-child{
                font-size: .875rem;
                text-decoration: line-through;
                color:black;
              }
            }
          }
        }
        
      }
      .btns{
        display: flex;
        justify-content: space-between;

      }
    }
    .empty{
      margin-top: 5.3125rem;
    }
    .likes {
      margin-top: 3.125rem;
      .tip {
        width: 100%;
        span-align: center;
        margin: .25rem 0 .7813rem;
        background-image: linear-gradient(to right bottom, rgb(241, 33, 33),
            rgb(228, 52, 219),
            black,
            orange);
        -webkit-background-clip: span;
        color: transparent;
        font-weight: 540;
        box-sizing: border-box;
        overflow: hidden;
      }
      
    }
  }

}
</style>