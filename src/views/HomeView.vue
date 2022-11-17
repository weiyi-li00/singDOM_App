<template>
  <input type="file" class="select" accept="application/pdf" placeholder="選擇PDF檔案" />
  <div id="pdfContainer" class="pdfContainer"></div>

  <!-- <canvas id="canvas" style="border: 1px solid #000"></canvas> -->
</template>
<script setup>
import { ref, onMounted } from "vue";
</script>
<style lang="scss" scoped>
.pdfContainer {
  width: 966px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20.16px 48px;
  margin: 0 auto;
  background-color: $gray-600;
}
.upLoadgroup {
  float: right;
  width: 300px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    position: relative;
  }
  .upLoaditem {
    position: absolute;
    width: 82px;
    display: flex;
    justify-content: center;
    align-items: center;
    input {
      opacity: 0;
      position: absolute;
      height: 182px;
    }
  }
}
</style>



