<template>
  <div class="category">
    <van-sidebar class="sidebar" v-model="active" @change="onChange">
      <van-sidebar-item title="标签名 1" />
      <van-sidebar-item title="标签名 2" />
    </van-sidebar>
    <div class="shop">
      <div class="item">
        <img src="" alt="">
        <p>2131293123</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { emitter } from "@/utils/mitt";
import { Toast } from "vant";
onMounted(() => {
  emitter.emit("updateTitle", "分类");
});

const active = ref(0);
const onChange = (index: number) => Toast(`标签名 ${index + 1}`);
</script>

<style lang="less" scoped>
.category {
  background-color: #f3f2f2;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  .sidebar{
    height: 100%;
    width: 5rem;
    background: #F5F6F8;
    overflow-y: scroll;
  }
  .shop{
    background: skyblue;
    flex: 1;
    height: 100%;
    .item{
      width: 5.525rem;
      height: 5.525rem;
      background: red;
      display: flex;
      flex-direction: column;
      align-items: center;
      img{

      }
      p{

      }
    }
  }
}
</style>
