<script setup>
import { ref, onMounted } from "vue";
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <nav class="navbar logo-ml flex-nowrap m-0" height="96">
    <div class>
      <RouterLink to="/">
        <img class="navImg" src="../../public/img/Vector.png" width="16" height="16" alt />
        <!-- <a class="navbar-brand navbarText" href="#">檔案名稱</a> -->
      </RouterLink>
      <div type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal1">
        <img class="navImg" src="../../public/img/pen.png" width="12" height="12" alt />
      </div>
      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal1"
        tabindex="-1"
        aria-labelledby="exampleModal1Label"
        aria-hidden="true"
      >
        <div class="modal-dialog rounded-0">
          <div class="modal-content rounded-0">
            <div class="modal-header border-m">
              <span class="editTitle d-flex justify-content-center">重新命名檔案</span>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="tab-content" id="nav-tabContent">
                <div
                  class="tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                  tabindex="0"
                >...</div>
              </div>
            </div>
            <div class="modal-footer justify-content-center">
              <button
                type="button"
                class="btn successBtn"
                id="saveCanvas"
                data-bs-dismiss="modal"
              >儲存</button>
            </div>
          </div>
        </div>
      </div>
      <!--Button trigger modal -->
    </div>

    <div class="d-flex">
      <button class="btn btn-pt8-pb-29 ms-4 btn-text btn-color">註冊</button>
    </div>
  </nav>
  <div class="container">
    <div class="progress">
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
* {
  background-color: #fff;
}
.successBtn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  width: 102px;
  height: 38px;
  background: #0b7d77;
  border-radius: 4px;
  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  color: #ffffff;
}
.border-m {
  border-bottom: 1px solid #0b7d77;
}
.editTitle {
  width: 100%;
  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #0b7d77;
  margin: 0 auto;
  margin-bottom: 10px;
}
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
  background-color: #ffff;
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