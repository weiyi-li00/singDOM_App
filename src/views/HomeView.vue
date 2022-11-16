<template>
  <span class="appName">閃簽・就是快</span>

  <div class="upLoadgroup">
    <img src="../../public/img/blockupload.png" alt />
    <div class="upLoaditem">
      <input ref="input" type="file" id="uploader" @change="handleFiles" style="opacity: 0;" />
    </div>
  </div>
</template>
<script setup>
</script>
<style lang="scss" scoped>
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



