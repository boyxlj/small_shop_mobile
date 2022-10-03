<template>
  <div class="home">
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
