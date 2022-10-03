<template>
  <van-tabbar  @change="changeTab" v-model="active" active-color="#ee0a24" inactive-color="#000">
    <van-tabbar-item
      v-for="(item, index) in tabList"
      :icon="item.icon"
      :key="index"
    >
      {{ item.name }}</van-tabbar-item
    >
  </van-tabbar>
</template>

<script setup lang="ts">
type TabList = {
  icon: string;
  path: string;
  name: string;
};
const tabList: TabList[] = [
  { icon: "home-o", path: "/home", name: "首页" },
  { icon: "apps-o", path: "/category", name: "分类" },
  { icon: "shopping-cart-o", path: "/car", name: "购物车" },
  { icon: "user-o", path: "/profile", name: "我的" },
];

const active = ref(0);
const router = useRouter()
const route = useRoute()
onUpdated(()=>{
  console.log(route)
})
//切换tab
const changeTab = (act: number | string) => {
  active.value  = act as number
  router.push('/shop'+tabList[act as number].path)
};
</script>

<style lang="less" scoped></style>
