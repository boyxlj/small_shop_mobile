<template>
  <div class="shopItem">
    <div class="item">
      <div class="top"> </div>
      <div class="bottom"> 
        <div class="title"></div>
        <div class="price"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang='less' scoped> 
.shopItem{
  width: 100%;
  min-height: 15.5rem;
  background: skyblue;
  .item{
    width: 45%;
    height: 15.5rem;
    background: #fff;
    border-radius: .625rem;
    padding: .2rem .785rem;
    box-sizing: border-box;
    .top{
      height: 9rem;
      background: red;
      padding: 0 1.785rem;
    }
  }
}
</style>