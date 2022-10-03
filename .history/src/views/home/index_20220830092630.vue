<template>
  <div class="home">
    13
    <Swiper></Swiper>
  </div>
</template>

<script setup lang="ts">
import { emitter } from "@/utils/mitt";
onMounted(() => {
  emitter.emit("updateTitle", "首页");
});
</script>

<style lang="less" scoped>
 
</style>
