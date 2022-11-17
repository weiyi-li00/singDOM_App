    pdfjsLib.GlobalWorkerOptions.workerSrc =
       "https://mozilla.github.io/pdf.js/build/pdf.worker.js";
     pdfjsLib.getDocument('./sample.pdf').promise.then((doc) => {
         for(let i=1; i <= doc.numPages;i++){
        doc.getPage(i).then((page) => {
              const viewport = page.getViewport({ scale: 1.5 });
              const canvas = document.createElement('canvas');
              canvas.style ="width:870px";
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
    