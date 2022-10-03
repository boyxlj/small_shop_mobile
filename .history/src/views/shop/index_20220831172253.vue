<template>
  <div class="shop">
    <Header></Header>
    <div class="content">
      <router-view>
        <keep-alive v-slot:Component>
          <component :is="Component"></component>
        </keep-alive>
        </router-view>
    </div>
    <div class="footer">
      <Tabbar></Tabbar>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.shop {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .content {
    background: #f3f2f2;
    flex: 1;
    overflow: auto;
  }
  .footer {
    height: 3.125rem;
    background: fff(198, 196, 196);
    border-top: 0.125rem solid #eee;
  }
}
</style>
