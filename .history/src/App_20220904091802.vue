<template>
    <router-view v-slot="{ Component }">
      <transition>
      
      
    <keep-alive>
      <component
        :is="Component"
        v-if="$route.meta.keepAlive"
        :key="$route.path"
      ></component>
    </keep-alive>
  </transition>
  <transition>
    <component
      :is="Component"
      v-if="!$route.meta.keepAlive"
      :key="$route.path"
    ></component>
    <transition>
  </router-view>

</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
