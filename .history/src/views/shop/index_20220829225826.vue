<template>
  <div class="home">
    <div class="header">
      <Header></Header>
    </div>
    <div class="content">
     <router-view></router-view>
    </div>
    <div class="footer">
      <Tabbar></Tabbar>
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
    border-bottom: .125rem solid #ccc;
    display:flex;
    align-items: center;
    justify-content: center;
    font-size: 1.875rem;
  }
  .content{
    background:skyblue;
    flex: 1;
    overflow: auto;
  }
  .footer{
    height: 3.125rem;
    background: rgb(198, 196, 196);
  }
}
</style>