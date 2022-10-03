<template>
   <Navheader  >
      <template #left>
        <div class="left">
          <van-icon  name="arrow-left" />
        </div>
      </template>
      <template #center>
        <div>
          商品搜索
        </div>
      </template>
    </Navheader>
    <van-search v-model="value" placeholder="请输入搜索关键词" />
</template>

<script setup lang="ts">

</script>

<style lang='less' scoped> 

</style>