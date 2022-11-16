<template>
  <span class="appName">閃簽・就是快</span>

  <div class="upLoadgroup">
    <img src="../../public/img/blockupload.png" alt />
    <div class="upLoaditem">
      <input ref="input" type="file" id="uploader" />
    </div>
  </div>
  <canvas id="canvas" style="border: 1px solid #000"></canvas>
</template>
<script setup>
pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://mozilla.github.io/pdf.js/build/pdf.worker.js";

console.log(pdfjsLib);
pdfjsLib.getDocument("./sample.pdf").promise.then((doc) => {
  console.log(doc._pdfInfo.numPages);
  // 抓取第一頁
  doc.getPage(doc._pdfInfo.numPages).then((page) => {
    console.log(page);
    // 設定 PDF 內容的顯示比例
    const viewport = page.getViewport({ scale: 1 });

    // 設定 canvas 的大小與 PDF 相等
    canvas.width = viewport.width;
    canvas.height = viewport.height;

    //實際渲染 PDF
    page.render({
      canvasContext: ctx,
      viewport: viewport,
    });
  });
});
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



