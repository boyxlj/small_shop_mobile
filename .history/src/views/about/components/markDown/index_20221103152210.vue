<template>
  <div class="markdown">
    <md-editor class="md" v-model="content" preview-only />
  </div>
</template>

<script setup lang="ts">
 import { ref } from 'vue';
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import {getAbout} from "@/api/about"

const content = ref('');
onMounted(async()=>{
  const {data:res} = await getAbout()
  if(res.code!=200) return
  content.value= res.content.replace(/shuangyinghao/g, '"').replace(/danyinhao/g, "'"); // 双引号
})



</script>

<style lang='less' scoped> 
.markdown{

}
</style>