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
  height: 100%;
  // overflow: hidden;
  display: flex;
  flex-direction: column;
  // overflow: hidden;
  .header{
    height: 2.66rem;
    width: 100%;
    border-bottom: .125rem solid #eee;
    display:flex;
    align-items: center;
    justify-content: center;
    font-size: 1.025rem;
  }
  .content{
    background: #f3f2f2;;
    flex: 1;
    overflow:auto ;
  }
  .footer{
    height: 3.125rem;
    background: fff(198, 196, 196);
    border-top: .125rem solid #eee;
  }
}
</style>