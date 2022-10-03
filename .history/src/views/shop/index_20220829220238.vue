<template>
  <div class="home">
    <div class="header"></div>
    <div class="content">
     <router-view></router-view>
    </div>
    <div class="footer">
      底部
    </div>
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
    height: 3.2rem;
    background:red;
  }
  .content{
    background:skyblue;
    flex: 1;
    overflow: auto;
  }
  .footer{
    height: 4rem;
    background: black;
  }
}
</style>