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
    <van-tabs v-model:active="active" swipeable>
  <van-tab v-for="index in 4" :title="'选项 ' + index">
    内容 {{ index }}
  </van-tab>
</van-tabs>
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