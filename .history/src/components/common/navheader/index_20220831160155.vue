<template>
  <div class="navheader">
    <slot name="left"></slot>
    <div>商品详情</div>
  </div>
  <div class="top"></div>
</template>

<script setup lang="ts">

</script>

<style lang='less' scoped> 
.navheader{
  width: 100%;
  height: 3.25rem;
  border-bottom: .125rem solid #f0f4f5;
  background: #fff;
  font-size: 1.1375rem;
  display: flex;
  justify-content: center;
  align-items:center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 999;
}
.top{
  margin: 3.25rem;
}
</style>