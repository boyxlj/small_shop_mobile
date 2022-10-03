<template>
  <div class="shopItem">
    <div class="item">
      <div class="top"> </div>
      <div class="bottom"> 
        <div class="title">huasdsadjsdadadhasdhhdjashdjahdadad</div>
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
    padding: .2rem .585rem;
    box-sizing: border-box;
    .top{
      height: 9.6rem;
      background: red;
      padding: 0 1.785rem !important;
    }
    .bottom{
      width: 100%;
      .title{

      }
    }
  }
}
</style>