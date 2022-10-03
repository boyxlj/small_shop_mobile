<template>
  <div class="view">
    <router-view v-slot="{ Component }">
    <keep-alive>
      <component
        :is="Component"
        v-if="$route.meta.keepAlive"
        :key="$route.path"
      ></component>
    </keep-alive>
    <component
      :is="Component"
      v-if="!$route.meta.keepAlive"
      :key="$route.path"
    ></component>
  </router-view>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
  .view{
   height: 100vh;
    overflow:hidden !important;
}
</style>
