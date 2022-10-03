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
        <van-tab v-for="item in 4" :title="'选项 ' + item" :key="item">
          内容 {{ item }}
        </van-tab>
      </van-tabs>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
console.log(route.query.num)

const active = ref(0);
</script>

<style lang='less' scoped> 
.order{
  height: 100%;

}
</style>