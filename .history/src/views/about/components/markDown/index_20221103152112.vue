<template>
  <div class="markdown">
    <md-editor class="md" v-model="text" preview-only />
  </div>
</template>

<script setup lang="ts">
 import { ref } from 'vue';
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import {getAbout} from "@/api/about"


onMounted(async()=>{
  const {data:res} = await getAbout()
  if(res.code!=200) return
  console.log(res)
})


const text = ref('# Hello Editor');
</script>

<style lang='less' scoped> 
.markdown{

}
</style>