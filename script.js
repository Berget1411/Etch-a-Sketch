const drawGrid = document.querySelector("#draw-grid");
const rangeInput = document.querySelector("#range-input");
const rangeValueSpan = document.querySelector("#range-value-span");
const clearButton = document.querySelector("#clear-button");
const colorModeButton = document.querySelector("#color-mode-button");
const rainbowModeButton = document.querySelector("#rainbow-mode-button");
const changeColorButton = document.querySelector("#change-color-button");
const colorDot = document.querySelector(".dot");

const makeRGB = () => {
  r = Math.floor(Math.random() * 255);
  g = Math.floor(Math.random() * 255);
  b = Math.floor(Math.random() * 255);
  return `RGB(${r}, ${g}, ${b})`;
};

const makeRow = (col, row) => {
  drawGrid.innerHTML = "";
  for (i = 0; i < row * col; i++) {
    let cell = document.createElement("div");
    cell.style.cssText = `height: ${
      (1 / col) * drawGrid.offsetWidth
    }px; width: ${(1 / row) * drawGrid.offsetWidth}px`;
    cell.classList.add("cell");
    if (rainbowMode !== true) {
      cell.addEventListener(
        "mouseover",
        () => (cell.style.backgroundColor = color)
      );
    } else {
      cell.addEventListener(
        "mouseover",
        () => (cell.style.backgroundColor = makeRGB())
      );
    }

    drawGrid.appendChild(cell);
  }
};

const startGame = () => {
  const value = rangeInput.value;
  makeRow((col = value), (row = value));
  rangeValueSpan.textContent = `${value} x ${value}`;
};

rangeInput.addEventListener("input", startGame);

let color = "black";
rainbowMode = false;
rangeInput.value = 16;
startGame();

//if screenwidth is less than 600, update grid
const resizeFn = () => {
  if (window.innerWidth < 600) {
    startGame();
  }
};
window.onresize = resizeFn;

clearButton.addEventListener("click", startGame);
rainbowModeButton.addEventListener("click", () => {
  rainbowMode = true;
  rainbowModeButton.style.cssText = "background-color: orange; color: white;";
  startGame();
});
colorModeButton.addEventListener("click", () => {
  rainbowMode = false;
  startGame();
});

changeColorButton.addEventListener("input", () => {
  colorCode = changeColorButton.value;
  color = colorCode;
  colorDot.style.backgroundColor = colorCode;
});
