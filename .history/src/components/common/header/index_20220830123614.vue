<template>
  <div class="header">
    {{ titleMsg }}
  </div>
</template>

<script setup lang="ts">
import {emitter} from "@/utils/mitt";
const titleMsg = ref("首页");
type Props = {
  titleMsg?:string
}
withDefaults(defineProps<Props>(),{
  titleMsg:""
})
emitter.on("updateTitle",(msg:string)=>{
  titleMsg.value  = msg
});
</script>

<style lang="less" scoped>
  .header{
    height: 2.66rem;
    width: 100%;
    border-bottom: .125rem solid #eee;
    display:flex;
    align-items: center;
    justify-content: center;
    font-size: 1.025rem;
  }

</style>
