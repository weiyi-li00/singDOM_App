<script setup>
import { ref, nextTick, onMounted } from "vue";
import { fabric } from "fabric";
import * as pdfjsLib from "pdfjs-dist/build/pdf.js";
import singCanvas from "../components/singCanvas.vue";
// const lineColor = ref("#0B7D77");

const getFileleng = ref(0);
const showData = ref(false);
const upLoadDatata = ref(true);
const changeFile = (e) => {
  getFileleng.value = e.target.files[0];
  console.log(getFileleng.value);
  if (e.target.files[0] === undefined) return;
  showData.value = true;
  upLoadDatata.value = false;
};
</script>
<template>
  <div class="upLoaddata" v-show="upLoadDatata">
    <h2 class="appDESC d-sm-none text-center">快速省時的電子簽署工具</h2>
    <div class="upLoadblock d-flex justify-content-around;">
      <div class="upLoaditem d-flex flex-column align-items-center m-auto">
        <img src="../../public/img/Add file.png" alt />
        <span class="text">將檔案拖曳至這裡，或</span>
        <div class="upLoadBtn">
          <span>選擇檔案</span>
          <input
            style="opacity: 0"
            type="file"
            ref="uploadFile"
            accept="application/pdf"
            placeholder="選擇PDF檔案"
            @change="changeFile($event)"
          />
        </div>

        <span class="text2 text-align-center">檔案大小10MB以內，檔案格式為PDF、JPG 或 PNG</span>
      </div>
    </div>
    <h2 class="text3">輕鬆幾步驟，完成您的簽署</h2>
    <div class="content d-flex justify-content-around" width="1296px">
      <div class="imgGroup d-flex flex-column align-items-center">
        <div class="num">1</div>
        <span class="itemTitle">上傳檔案</span>
        <span class="itemDesc">選擇PDF檔或是IMG檔</span>
        <img src="../../public/img/File-upload.png" width="240" height="160" alt class="imgItem" />
      </div>
      <div class="imgGroup d-flex flex-column align-items-center" width="240" height="160">
        <div class="num">2</div>
        <span class="itemTitle">加入簽名檔</span>
        <span class="itemDesc">手寫、輸入或是上傳簽名檔</span>
        <img src="../../public/img/Signing.png" alt class="imgItem" />
      </div>
      <div class="imgGroup d-flex flex-column align-items-center" width="240" height="160">
        <div class="num">3</div>
        <span class="itemTitle">下載與傳送</span>
        <span class="itemDesc">完成簽署可立即傳送檔案給對方</span>
        <img src="../../public/img/Sending.png" alt class="imgItem" />
      </div>
    </div>
  </div>
  <!-- v-show="showData" -->
  <div class="singCanvas" v-show="showData">
    <singCanvas></singCanvas>
  </div>
</template>
<style lang="scss" scoped>
.itemTitle {
  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.5px;
  color: #323338;
  .itemDesc {
    font-family: "Noto Sans TC";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    color: #323338;
  }
}
.text3 {
  left: calc(50% - 286px / 2);
  top: 616px;
  font-family: "Noto Sans TC";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #323338;
  text-align: center;
  margin-bottom: 27px;
}
.appDESC {
  font-family: "Noto Sans TC";
  margin-top: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: -0.2px;
  color: #676879;
  margin-bottom: 16px;
}
.upLoadblock,
.upLoaditem,
.upLoaditem > img,
.upLoaditem > .text,
.upLoaditem > input,
.upLoaditem > .text2 {
  background-color: #cee5e4;
}
.upLoadblock {
  width: 1296px;
  height: 440px;
  margin: 40px auto;
  padding-bottom: 12px;
  padding-top: 11px;
  border: 2px dashed #0b7d77;
}
.content {
  width: 1296px;
  margin: 0 auto;
}
.upLoaditem {
  font-style: normal;
  img {
    max-width: 120px;
    max-height: 120px;
    margin-bottom: 30px;
  }
  .text {
    margin-bottom: 8px;
  }
  .upLoadBtn {
    width: 416px;
    height: 48px;
    background: #0b7d77;
    border-radius: 4px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    position: relative;
    span {
      width: 100px;
      margin: 0 auto;
      background: #0b7d77;
      font-family: "Noto Sans TC";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      text-align: center;
      letter-spacing: -0.5px;
      color: #ffffff;
    }
  }
  input {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 24px;
    position: absolute;
  }
  .text2 {
    font-family: "Noto Sans TC";
    width: 326px;
    height: 22px;
    font-weight: 700;
    font-size: 14px;
    line-height: 22px;
    color: #096561;
  }
}

@media (max-width: 570px) {
  .content {
    width: 100%;
    flex-wrap: wrap;
  }
  .upLoadBtn {
    width: 144px !important;
    height: 48px !important;
  }
  .upLoadblock {
    width: 100%;
    margin: 40px auto;
    padding: 126px 24px 122px 24px;
  }
  .upLoaddata {
    padding: 0px 24px;
  }
  .upLoaditem {
    width: 100%;
    margin: 0 auto;
    img {
      margin-bottom: 20px;
    }
    .text {
      display: none;
      margin-bottom: 8px;
    }
    .text2 {
      width: 264px;
      height: 44px;
      left: calc(50% - 264px / 2);
      top: 426px;
      line-height: 22px;
      text-align: center;
    }
    input {
      margin-bottom: 8px;
      width: 144px;
      height: 48px;
    }
  }
}
</style>
