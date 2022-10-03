<template>
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
</template>

<script setup lang="ts"></script>

<style scoped></style>
