<template>
  <div class="home">
    <Swiper></Swiper>
  </div>
</template>

<script setup lang="ts">
  import {getSwiper} from "@/api/request"
  import Swiper from "./components/swiper/index.vue"
import { emitter } from "@/utils/mitt";
const swiperData = ref([])
onMounted(() => {
  emitter.emit("updateTitle", "首页");
  swiper()
});

//请求轮播数据
const swiper= async()=>{
  const {data:res} = await getSwiper()
  console.log(res)
  if(res.code!=200) return 
  swiperData.value = res.data
}

</script>

<style lang="less" scoped>
 
</style>
