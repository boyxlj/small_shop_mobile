<template>
  <h1>Home</h1>
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