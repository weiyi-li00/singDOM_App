<script setup>
import { ref, onMounted } from "vue";
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <nav class="navbar bg-light logo-ml flex-nowrap m-0">
    <div class>
      <RouterLink to="/">
        <img class="navImg" src="../../public/img/Vector.png" width="16" height="16" alt />
        <a class="navbar-brand navbarText" href="#">檔案名稱</a>
      </RouterLink>
      <img class="navImg" src="../../public/img/pen.png" width="12" height="12" alt />
    </div>

    <div class="d-flex">
      <button class="btn btn-pt8-pb-29 ms-4 btn-text btn-color">註冊</button>
    </div>
  </nav>
  <div class="container bg-light">
    <div class="progress bg-light">
      <li class="d-flex">
        <span class="radiosGreen">
          <span class="material-symbols-outlined nth-1">done</span>
        </span>
        <span class="progressText">成功上傳檔案</span>
        <div class="dash"></div>
      </li>
      <li class="d-flex">
        <span class="radiosGreen">2</span>
        <span class="progressText">加入簽名檔</span>
        <div class="dash"></div>
      </li>
      <li class="d-flex">
        <span class="radiosGray">3</span>
        <span class="progressText">確認檔案</span>
        <div class="dash"></div>
      </li>
      <li class="d-flex">
        <span class="radiosGray">4</span>
        <span class="progressText">下載檔案</span>
      </li>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.navbar,
.container {
  border-bottom: 1px solid #c5c7d0;
}
.container {
  padding: 16px 0;
}
.progress {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  li {
    list-style-type: none;
    align-items: center;
    .radiosGreen {
      width: 32px;
      height: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #0b7d77;
      border: 2px solid #0b7d77;
      border-radius: 100%;
      margin-right: 12px;
      /* H4 */
      color: #fff;
      font-family: "Noto Sans TC";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
    }
    .nth-1 {
      background-color: #0b7d77 !important;
      border-radius: 100% !important;
    }
    .radiosGray {
      /* H4 */
      font-family: "Noto Sans TC";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: -0.5px;
      color: #676879;
      width: 32px;
      height: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 12px;
      border: 2px solid #c5c7d0;
      border-radius: 100%;
    }
    .dash {
      width: 80px;
      border: 2px solid #c5c7d0;
      margin: 0 16px;
    }
  }
  .progressText {
    font-family: "Noto Sans TC";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #323338;
  }
}
.navbarText {
  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  color: #323338;
  margin-right: 10px;
}
.navbar {
  padding: 29px 72px;
}
.navImg {
  margin-right: 20px;
  cursor: pointer;
}
@media (max-width: 570px) {
  .progressText,
  .dash {
    display: none;
  }
  li:nth-child(2) > .progressText {
    display: inline-block;
    margin: 0 66px 0 10px;
  }
}
</style>