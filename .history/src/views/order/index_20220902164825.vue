<template>
  <div class="order">
    <Navheader>
      <template #left>
        <div class="left">
          <van-icon name="arrow-left" />
        </div>
      </template>
      <template #center>
        <div>我的订单</div>
      </template>
    </Navheader>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
console.log(route.query.num)
</script>

<style lang='less' scoped> 
.order{
  height: 100%;

}
</style>