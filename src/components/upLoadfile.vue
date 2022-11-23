<script setup>
import { ref } from "vue";
import { fabric } from "fabric";
import * as pdfjsLib from "pdfjs-dist/build/pdf.js";
// import usefabric from "../composables/usefabric";
const Base64Prefix = ref("data:application/pdf;base64,");
pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://mozilla.github.io/pdf.js/build/pdf.worker.js";
const getFileleng = ref(0);
const changeFile = (e) => {
  getFileleng.value = e.target.files;
  if (e.target.files[0] === undefined) return;
};
</script>
<template>
  <div class="upLoaddata" v-if="getFileleng===0">
    <input
      type="file"
      ref="uploadFile"
      accept="application/pdf"
      class="select"
      placeholder="選擇PDF檔案"
      @change="changeFile($event)"
    />
  </div>
  <div class="showData">
    <div>成功上傳檔案->加入簽名檔</div>
    <canvas id="canvas" ref="canvas" style="border: 1px solid #000"></canvas>
  </div>
</template>
<style lang="scss" scoped>
</style>