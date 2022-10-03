<template>
  <div class="navheader">
    <slot name="left" ></slot>
    <slot name="center" class="title">微商城</slot>
    <slot name="right"></slot>
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
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items:center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 999;

  .title{
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: red;
  }
}
.top{
  margin: 3.25rem;
  

}

:slotted(.title){
  color: red;
}

</style>