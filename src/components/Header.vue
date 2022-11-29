<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <nav class="navbar bg-light logo-ml flex-nowrap m-0">
    <div class>
      <a class="navbar-brand" href="#">
        <img src="../../public/img/logo.png" alt="logo" width="96" height="48" />
      </a>
    </div>
    <h2 class="title d-none d-lg-block">快速省時的電子簽署工具</h2>
    <div class="d-flex">
      <button class="btn btn-pt8-pb-29 btn-text btn-t-color">登入</button>
      <button class="btn btn-pt8-pb-29 ms-4 btn-text btn-color">註冊</button>
    </div>
  </nav>
</template>
<style lang="scss" scoped>
.navbar {
  padding: 24px 72px;
}
.title {
  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  letter-spacing: -0.2px;
  color: #676879;
}
</style>