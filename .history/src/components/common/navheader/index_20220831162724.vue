<template>
  <div class="navheader">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center" >微商城</slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
  <div class="top"></div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.navheader {
  width: 100%;
  height: 3.25rem;
  border-bottom: 0.125rem solid #f0f4f5;
  background: #fff;
  font-size: 1.1375rem;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 999;
  padding: 0 1.05rem;
  box-sizing: border-box;

  .title {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: red !important;
  }
}
.top {
  margin: 3.25rem;
}

:slotted(.left){
  font-size: 1.4375rem;
  color: #ccc;

}
</style>
