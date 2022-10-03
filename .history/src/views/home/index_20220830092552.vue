<template>
  <div class="home">
    
  </div>
</template>

<script setup lang="ts">
import { emitter } from "@/utils/mitt";
onMounted(() => {
  emitter.emit("updateTitle", "首页");
});
</script>

<style lang="less" scoped>
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 11.875rem;
    text-align: center;
    background-color: #39a9ed;
  }
</style>
