<template>
  <div class="collect">
    <Navheader  >
      <template #center>
        <div>
          我的收藏
        </div>
      </template>
    </Navheader>
    <div class="collect">
  <div class="contents">
    <div class="items" v-for="item in collectData" :key="item.detailId">
      <div class="logos"><van-tag size="large" round type="danger" color="#cf0a2c">微商城自营店</van-tag></div>
    <div class="list" >
      <div class="left" @click="navigateDetail(item.detailId)"><img :src='item.titleImg' /></div>
      <div class="right" @click="navigateDetail(item.detailId)" >
        <div class="top">{{item.title}}/{{item.descs}}</div>
        <div class="bottom">
          <span class="prePrice" v-if="item.prePrice">￥{{ item.prePrice }}</span>
          <span class="nowPrice">￥{{ item.price }}</span>
        </div>
      </div>
    </div>
    <div class="btns">
      <van-button size="small" @click="cancelCollect(item.collectId)"  round>取消收藏</van-button>
      <van-button @click="addCar(item.detailId)" size="small" type="danger" color="#cf0a2c" round>加入购物车</van-button>
    </div>
      </div>
      <div class="empty"  v-if="isEmpty" >
        <van-empty image="error" description="您还没有收藏任何商品" />
      </div>
      <div class="likes">
        <div class="tip like">--猜你喜欢--</div>
        <ShopItem :indexShopData="randomShopData" :noTitle="true"></ShopItem>
      <div class="distanceBottom"></div>
      </div>
  </div>
</div>
  </div>
</template>

<script setup lang="ts">
import {getSelectCollect,getIsAddCar,getRemoveCollectByCollectId} from "@/api/request"
import { Toast } from "vant";
import { IIndexData } from "@/types/shop";
import {useGetRandomShop} from "@/hooks/shop"
const randomData = useGetRandomShop();
const { randomShopData } = toRefs(randomData);
const router = useRouter()
const userId = localStorage.getItem("userId") as any
const collectData = ref<IIndexData[]>([])
const isEmpty = ref(false)

Toast.allowMultiple();
onMounted(()=>{
  userCollect()
})

//跳转详情页
const navigateDetail = (detailId:number)=>{
  router.push(`details?detailId=${detailId}`)
}

//加入购物车
const addCar = async(detailId:number)=>{
  const {data:res} =await getIsAddCar(
    userId,
    detailId
  )
  if(res.code===403) return Toast("该商品已添加至购物车")
  if(res.code===404) return Toast("添加购物车失败")
  Toast("已添加我的购物车")
}

//取消收藏
const cancelCollect = async(detailId:number)=>{
  const {data:res} =await getRemoveCollectByCollectId(
    detailId
  )
  console.log(res)
  if(res.code!=200) return Toast.fail("取消收藏失败")
  Toast.success("已从我的收藏中移除")
  userCollect()
}

//查询用户收藏商品
const userCollect = async()=>{
  const toast1 = Toast.loading({
  message: '加载中...',
  forbidClick: true,
  duration:0,
  loadingType: 'spinner',
});
  const {data:res} = await getSelectCollect(userId).finally(()=>{
    toast1.clear()
  })
  if(res.code!=200) {
    collectData.value = []
    isEmpty.value = true
    return 
  }
  collectData.value =res.data
  isEmpty.value = false
}
</script>

<style lang='less' scoped> 
.collect{
  height: 100%;
  background: var(--bgColor);
  overflow: hidden;
  .contents{
    width: 100%;
    min-height: 20rem;
    padding: 0 .625rem;
    box-sizing: border-box;
    margin-top: .7813rem;
    margin-bottom: .625rem;
    .items{
      width: 100%;
      background-color: #fff;
      height: 13.125rem;
      padding: .9375rem .625rem;
      box-sizing: border-box;
      border-radius: .625rem;
      margin-bottom: .9375rem;
      
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
          img{
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
            color: var(--themeColor);
            display: flex;
            justify-content: space-between;
            // span{
            //   &:last-child{
            //     font-size: .875rem;
            //     text-decoration: line-through;
            //     color:black;
            //   }
            // }
            .prePrice { 
                font-size: .875rem;
                text-decoration: line-through;
                color:black;
            
            }
            .nowPrice {
              color: var(--themeColor);
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
  }

}
</style>