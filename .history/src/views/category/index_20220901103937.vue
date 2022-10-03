<template>
  <div class="category">
    <van-sidebar class="sidebar" v-model="active" @change="onChange">
      <van-sidebar-item title="标签名 1" />
      <van-sidebar-item title="标签名 2" />
      <van-sidebar-item title="标签名 3" />
    </van-sidebar>
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
  .sidebar{
    height: 100%;
  }
}
</style>
