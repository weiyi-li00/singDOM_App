const singinCanvas = document.querySelector(".singinCanvas");
const ctx = singinCanvas.getContext("2d");
const clearBtn = document.querySelector(".clear");
const saveBtn = document.querySelector(".save");
// 設定線條的相關數值
ctx.lineWidth = 4;
ctx.lineCap = "round";

// 設置狀態來確認滑鼠 / 手指是否按下或在畫布範圍中
let isPainting = false;

// 取得滑鼠 / 手指在畫布上的位置
function getPaintPosition(e) {
  const canvasSize = singinCanvas.getBoundingClientRect();

  if (e.type === "mousemove") {
    return {
      x: e.clientX - canvasSize.left,
      y: e.clientY - canvasSize.top
    };
  } else {
    return {
      x: e.touches[0].clientX - canvasSize.left,
      y: e.touches[0].clientY - canvasSize.top
    };
  }
}

// 開始繪圖時，將狀態開啟
function startPosition(e) {
  e.preventDefault();
  isPainting = true;
}

// 結束繪圖時，將狀態關閉，並產生新路徑
function finishedPosition() {
  isPainting = false;
  ctx.beginPath();
}

// 繪圖過程
function draw(e) {
  // 滑鼠移動過程中，若非繪圖狀態，則跳出
  if (!isPainting) return;

  // 取得滑鼠 / 手指在畫布上的 x, y 軸位置位置
  const paintPosition = getPaintPosition(e);

  // 移動滑鼠位置並產生圖案
  ctx.lineTo(paintPosition.x, paintPosition.y);
  ctx.stroke();
}

// 重新設定畫布
function reset() {
  ctx.clearRect(0, 0, singinCanvas.width, singinCanvas.height);
}

// event listener 電腦板
singinCanvas.addEventListener("mousedown", startPosition);
singinCanvas.addEventListener("mouseup", finishedPosition);
singinCanvas.addEventListener("mouseleave", finishedPosition);
singinCanvas.addEventListener("mousemove", draw);

// event listener 手機板
singinCanvas.addEventListener("touchstart", startPosition);
singinCanvas.addEventListener("touchend", finishedPosition);
singinCanvas.addEventListener("touchcancel", finishedPosition);
singinCanvas.addEventListener("touchmove", draw);

clearBtn.addEventListener("click", reset);

const showImage = document.querySelector(".show-img");
function saveImage() {
  const newImg = singinCanvas.toDataURL("image/png");
  showImage.src = newImg;
  localStorage.setItem("img", newImg);
}

saveBtn.addEventListener("click", saveImage);
