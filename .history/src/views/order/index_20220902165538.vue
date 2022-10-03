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
        <van-tab v-for="item in tabList" :key="item.id" :title="item.name">{{ item.name }}</van-tab>
      </van-tabs>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const active = ref(0);
const tabList = ref<{
  id:number,
  name:string
}[]>([
  {id:0,name:"全部订单"},
  {id:1,name:"待付款"},
  {id:2,name:"待发货"},
  {id:3,name:"待收货"},
  {id:4,name:"待评价"},
])
// console.log(route.query.num)

onMounted(()=>{
  active.value = route.query.num as any
})

</script>

<style lang='less' scoped> 
.order{
  height: 100%;

}
</style>