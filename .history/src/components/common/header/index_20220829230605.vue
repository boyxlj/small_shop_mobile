<template>
  <div>
    {{ titleMsg }}
  </div>
</template>

<script setup lang="ts">
import {emitter} from "@/utils/mitt";
emitter.on("");
const titleMsg = ref("首页");
</script>

<style lang="less" scoped></style>
