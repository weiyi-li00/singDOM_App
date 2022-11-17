<template>
  <div class="upLoadgroup">
    <img src="../../public/img/blockupload.png" alt />
    <div class="upLoaditem">
      <input ref="input" type="file" id="uploader" />
    </div>
  </div>
  <div id="pdfContainer" class="pdfContainer"></div>
</template>
<script setup>
import { ref, onMounted } from "vue";
</script>
<style lang="scss" scoped>
.pdfContainer {
  width: 870px;
  margin: 0 auto;
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



