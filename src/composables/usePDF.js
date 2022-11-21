const Base64Prefix = "data:application/pdf;base64,";
pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://mozilla.github.io/pdf.js/build/pdf.worker.js";
const selectFile = document.querySelector(".select");
const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");
async function renderPDF(data) {
  //const pdfDoc = await pdfjsLib.getDocument(data).promise;
  //const pdfPage = await pdfDoc.getPage(1);
  pdfjsLib.getDocument(data).promise.then((doc) => {
    for (let i = 1; i <= doc.numPages; i++) {
      doc.getPage(i).then((page) => {
        const viewport = page.getViewport({ scale: 1.5 });
        const canvas = document.createElement("canvas");
        canvas.style = "width:870px;padding:15px 0;background-color:#6c757d";
        const context = canvas.getContext("2d");
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        let renderContext = {
          canvasContext: context,
          viewport: viewport
        };
        page.render(renderContext);
        document.getElementById("pdfContainer").appendChild(canvas);
      });
    }
  });
}

selectFile.addEventListener("change", (e) => {
  if (e.target.files[0] === undefined) return;

  // 透過 input 所選取的檔案
  const file = e.target.files[0];

  // 產生fileReader物件
  const fileReader = new FileReader();

  // 將資料做處理
  fileReader.readAsArrayBuffer(file);

  // 綁入事件監聽
  fileReader.addEventListener("load", () => {
    // 獲取readAsArrayBuffer產生的結果，並用來渲染PDF
    const typedarray = new Uint8Array(fileReader.result);
    renderPDF(typedarray);
  });
});

// 使用原生 FileReader 轉檔
function readBlob(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result));
    reader.addEventListener("error", reject);
    reader.readAsDataURL(blob);
  });
}
async function printPDF(pdfData) {
  // 將檔案處理成 base64
  pdfData = await readBlob(pdfData);

  // 將 base64 中的前綴刪去，並進行解碼
  const data = atob(pdfData.substring(Base64Prefix.length));

  // 利用解碼的檔案，載入 PDF 檔及第一頁
  const pdfDoc = await pdfjsLib.getDocument({ data }).promise;
  const pdfPage = await pdfDoc.getPage(1);

  // 設定尺寸及產生 canvas
  const viewport = pdfPage.getViewport({ scale: window.devicePixelRatio });
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  // 設定 PDF 所要顯示的寬高及渲染
  canvas.height = viewport.height;
  canvas.width = viewport.width;
  const renderContext = {
    canvasContext: context,
    viewport
  };
  const renderTask = pdfPage.render(renderContext);

  // 回傳做好的 PDF canvas
  return renderTask.promise.then(() => canvas);
}

async function pdfToImage(pdfData) {
  // 設定 PDF 轉為圖片時的比例
  const scale = 1 / window.devicePixelRatio;

  // 回傳圖片
  return new fabric.Image(pdfData, {
    id: "renderPDF",
    scaleX: scale,
    scaleY: scale
  });
}
