<template>
  <div class="category">
    <van-sidebar class="sidebar" v-model="active" >
      <van-sidebar-item @click="change(item.detailId)" v-for="item in categoryData" :key="item.detailId" :title="item.categoryName+''" />
    </van-sidebar>
    <div class="shop">
      <div class="item" v-for="item in categoryShopData" :key="item.detailId" >
        <img :src="item.titleImg" alt="" />
        <p>{{item.title}}</p>
      </div>
      
     
    </div>
  </div>
</template>

<script setup lang="ts">
import { emitter } from "@/utils/mitt";
import { Toast } from "vant";
import { TCategoryReq } from "@/types/category";
import {IIndexData} from "@/types/shop"
import { getCategory, getCategoryShop } from "@/api/request";
onMounted(() => {
  emitter.emit("updateTitle", "分类");
  category();
});
const req = reactive<TCategoryReq>({
  detailId: 1,
  pageOn: 1,
  pageCount: 59,
});

const categoryData = ref<IIndexData[]>([]);
const categoryShopData = ref<IIndexData[]>([]);

//获分类数据
const category = async () => {
  const { data: res } = await getCategory();
  if (res.code != 200) return Toast.fail("服务异常！");
  console.log("分类数据", res.data);
  categoryData.value = res.data;
  req.detailId = res.data[0].detailId
  categoryShop();

};

//获取分类下的商品数据
const categoryShop = async () => {
  const { data: res } = await getCategoryShop(req);
  if (res.code != 200) {
    categoryShopData.value = [];
    return;
  }
  console.log("分类下的商品数据", res.data);
  categoryShopData.value = res.data;
};


const active = ref(0);
const change = (detailId: number) => {
  req.detailId = detailId
  categoryShop();
}
</script>

<style lang="less" scoped>
.category {
  background-color: #f3f2f2;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  .sidebar {
    height: 100%;
    width: 5rem;
    background: #f5f6f8;
    overflow-y: scroll;
  }
  .shop {
    background: #fff;
    flex: 1;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    // position: fixed;
    // left:5rem ;
    padding: 0 0.3375rem;
    box-sizing: border-box;
    justify-content: space-between;
    align-content: flex-start;
    .item {
      width: 5.425rem;
      height: 5.325rem;
      background: red;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0 0.125rem;
      box-sizing: border-box;
      margin: 0.425rem 0.125rem;

      img {
        width: 3.8rem;
        height: 3.8rem;
        object-fit: cover;
        border: 1px solid #fff;
      }
      p {
        margin-top: 0.3125rem;
        width: 100%;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 0.7rem;
      }
    }
  }
}
</style>
