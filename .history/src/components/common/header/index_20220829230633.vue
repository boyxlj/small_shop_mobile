<template>
  <div>
    {{ titleMsg }}
  </div>
</template>

<script setup lang="ts">
import {emitter} from "@/utils/mitt";
const titleMsg = ref("首页");
emitter.on("updateTitle",(msg:string)=>{
  titleMsg.value  = msg
});
</script>

<style lang="less" scoped></style>
