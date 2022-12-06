<script lang="ts" setup>
import { ref, nextTick, onMounted } from "vue";
import vueEsign from "vue-esign";
import { TabsPaneContext } from "element-plus";

const resultImg = ref("");
const activeName = ref("first");

const handleClick = (tab, event) => {
  console.log(tab, event);
};
function handleGenerate(e) {
  e.esign
    .generate()
    .then((res) => {
      resultImg.value = res;
      localStorage.setItem("img", resultImg.value);
    })
    .catch((err) => {
      alert(err); // 画布没有签字时会执行这里 'Not Signned'
    });
}
</script>
<template>
  <div class="showData d-flex justify-content-between">
    <canvas id="canvas" style="border: 1px solid #000;"></canvas>
    <div class="sideBar">
      <!--Button trigger modal-->
      <div type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <b>+</b>創造簽名檔
      </div>
      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <nav class="nav">
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                  <button
                    class="nav-link"
                    id="nav-home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-home"
                    type="button"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >輸入</button>
                  <button
                    class="nav-link"
                    id="nav-profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-profile"
                    type="button"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >手寫</button>
                  <button
                    class="nav-link"
                    id="nav-contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-contact"
                    type="button"
                    role="tab"
                    aria-controls="nav-contact"
                    aria-selected="false"
                  >上傳</button>
                </div>
              </nav>
              <div class="tab-content" id="nav-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                  tabindex="0"
                >
                  <vue-esign
                    ref="esign"
                    width="466"
                    height="234"
                    :isCrop="isCrop"
                    :lineWidth="lineWidth"
                    :lineColor="lineColor"
                    v-model:bgColor="bgColor"
                  />
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                  tabindex="0"
                >...</div>
                <div
                  class="tab-pane fade"
                  id="nav-contact"
                  role="tabpanel"
                  aria-labelledby="nav-contact-tab"
                  tabindex="0"
                >...</div>
                <div
                  class="tab-pane fade"
                  id="nav-disabled"
                  role="tabpanel"
                  aria-labelledby="nav-disabled-tab"
                  tabindex="0"
                >...</div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                id="clearCanvas"
                @click="handleReset=$refs.esign.reset()"
              >清除</button>
              <button
                type="button"
                class="btn btn-primary"
                id="saveCanvas"
                data-bs-dismiss="modal"
                @click="handleGenerate($refs)"
              >儲存</button>
            </div>
          </div>
        </div>
      </div>
      <!--Button trigger modal -->
      <p>我的簽名</p>
      <img id="show-img" style="border: 1px solid #000" width="250" height="150" :src="resultImg" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.sideBar {
  // width: 402px;
  padding-left: 24px;
  padding-right: 78px;
  float: right;
  background-color: #e5e5e5;
  display: flex;
  flex-direction: column;
}
.nav {
  background-color: #f5f6f8;
  padding: 0px;
  margin: 0px;
  .nav-tabs {
    width: 100%;
    display: flex;
    justify-content: space-around;
    .nav-link {
      padding: 0px;
      color: #000000;
    }
  }
}
.active {
  background-color: #f5f6f8;
  border-color: #f5f6f8;
}
.modal-header {
  border-bottom: 0;
}
.modal-content {
  width: 512px;
}
.tab-content {
  padding: 16px 0;
}
</style>
