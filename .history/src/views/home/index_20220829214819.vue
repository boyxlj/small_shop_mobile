<template>
  <div class="home">
    <div class="header"></div>
    <div class="content"></div>
    <div class="footer"></div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang='less' scoped> 
.home{
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .header{
    height: 5.5rem;
    background:red;
  }
  .content{
    background:skyblue;
  }
  .footer{
    height: 6rem;
    background: black;
  }
}
</style>