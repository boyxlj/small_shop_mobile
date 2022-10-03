<template>
  <div class="login">
    <div class="contain">
      <div class="title">微商城</div>
      <van-form @submit="onSubmit" class="from">
        <van-cell-group inset>
          <van-field
            v-model="username"
            name="账号"
            label="账号"
            placeholder="账号"
            :rules="[{ required: true, message: '请填写账号' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
        </van-cell-group>
        <div style="margin: 16px">
          <van-button round block type="danger" native-type="submit">
            登录
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script setup lang="ts">
const username = ref("");
const password = ref("");
type Form = {
  username:string,
  password:string,
}
const onSubmit = (values:Form) => {
  console.log("submit", values);
};
</script>

<style lang="less" scoped>
.login {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .contain {
    width: 85%;
    height: 20.25rem;
    // background-color: skyblue;
    box-shadow: 0 0 1.25rem #eee;
    border-radius: .625rem;
    text-align: center;
    padding: 1.05rem;
    box-sizing: border-box;
    .title {
      font-size: 1.875rem;
    }
    .from{
      width: 100%;
      margin-top: 1.875rem;
    }
  }
}
</style>
