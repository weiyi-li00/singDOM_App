pdfjsLib.GlobalWorkerOptions.workerSrc = "https://mozilla.github.io/pdf.js/build/pdf.worker.js";
const selectFile = document.querySelector(".select");
const canvas = document.createElement('canvas');;
const context = canvas.getContext("2d");
async function renderPDF(data) {
  //const pdfDoc = await pdfjsLib.getDocument(data).promise;
  //const pdfPage = await pdfDoc.getPage(1);
    pdfjsLib.getDocument(data).promise.then((doc) => {
        for(let i=1; i <= doc.numPages;i++){
            doc.getPage(i).then((page) => {
                const viewport = page.getViewport({ scale: 1.5 });
                const canvas = document.createElement('canvas');
                canvas.style = "width:870px;padding:15px 0;background-color:#6c757d";
                const context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;
                let renderContext = {
                canvasContext: context,
                viewport: viewport
                };
                page.render(renderContext);
                document.getElementById('pdfContainer').appendChild(canvas);
        })
      }
    })
}
// renderPDF("./sample.pdf");
selectFile.addEventListener("change", (e) => {
  if (e.target.files[0] === undefined) return;
});
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

// 引入套件所提供的物件 jsPDF下載PDF
const pdf = new jsPDF();

const download = document.querySelector(".download");

download.addEventListener("click", () => {

  // 將 canvas 存為圖片
  const image = canvas.toDataURL("image/png");
  
  // 設定背景在 PDF 中的位置及大小
  const width = pdf.internal.pageSize.width;
  const height = pdf.internal.pageSize.height;
  pdf.addImage(image, "png", 0, 0, width, height);

  // 將檔案取名並下載
  pdf.save("download.pdf");
});













   
    
   

    