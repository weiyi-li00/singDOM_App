
const Base64Prefix = "data:application/pdf;base64,";
pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://mozilla.github.io/pdf.js/build/pdf.worker.js";

function readBlob(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result));
    reader.addEventListener("error", reject);
    reader.readAsDataURL(blob);
  });
}

async function printPDF(pdfData) {
  pdfData = await readBlob(pdfData);
  const data = atob(pdfData.substring(Base64Prefix.length));

  // Using DocumentInitParameters object to load binary data.
  const pdfDoc = await pdfjsLib.getDocument({ data }).promise;
  const pdfPage = await pdfDoc.getPage(1);

  const viewport = pdfPage.getViewport({ scale: window.devicePixelRatio });
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
    document.getElementsByTagName("canvas")[1].removeAttribute("style");
  // 控制顯示PDF的寬高
  canvas.height = viewport.height;
  canvas.width = viewport.width;
  const renderContext = {
    canvasContext: context,
    viewport,
  };
  const renderTask = pdfPage.render(renderContext);
  // 回傳做好的canvas
  return renderTask.promise.then(() => canvas);
}

async function pdfToImage(pdfData) {
  const scale = 1 / window.devicePixelRatio;
  return new fabric.Image(pdfData, {
    scaleX: scale,
    scaleY: scale,
  });
}

const canvas = new fabric.Canvas("canvas");
document.querySelector("input").addEventListener("change", async (e) => {
  canvas.requestRenderAll();
  const pdfData = await printPDF(e.target.files[0]);
  const pdfImage = await pdfToImage(pdfData);

  // 調整canvas大小
  canvas.setWidth(pdfImage.width / window.devicePixelRatio);
  canvas.setHeight(pdfImage.height / window.devicePixelRatio);
  canvas.setBackgroundImage(pdfImage, canvas.renderAll.bind(canvas));
});

 // 加入簽名
 const sign = document.getElementById("show-img");
sign.addEventListener("click", () => {
  if (!sign.src) return;
  fabric.Image.fromURL(sign.src, function (image) {
    image.top = 400;
    image.scaleX = 0.5;
    image.scaleY = 0.5;
    canvas.add(image);
    canvas.setActiveObject(image)
  });
});

// 下讚PDF
// const pdf = new jsPDF();
// const download = document.querySelector(".download");
// download.addEventListener("click", () => {
//   const image = canvas.toDataURL("image/png");
//   const width = pdf.internal.pageSize.width;
//   const height = pdf.internal.pageSize.height;
//   pdf.addImage(image, "png", 0, 0, width, height);
//   pdf.save("download.pdf");
// });