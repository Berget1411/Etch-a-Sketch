const drawGrid = document.querySelector("#draw-grid");
const rangeInput = document.querySelector("#range-input");
const rangeValueSpan = document.querySelector("#range-value-span");

const makeRow = (col, row) => {
  drawGrid.innerHTML = "";
  for (i = 0; i < row * col; i++) {
    let cell = document.createElement("div");
    cell.style.cssText = `height: ${
      (1 / col) * drawGrid.offsetWidth
    }px; width: ${(1 / row) * drawGrid.offsetWidth}px`;
    cell.classList.add("cell");
    drawGrid.appendChild(cell);
  }
};

const handleRangeChange = () => {
  const value = rangeInput.value;
  makeRow((col = value), (row = value));
  rangeValueSpan.textContent = `${value} x ${value}`;
};

rangeInput.addEventListener("input", handleRangeChange);

rangeInput.value = 16;
handleRangeChange();

//if screenwidth is less than 600, update grid
const resizeFn = () => {
  if (window.innerWidth < 600) {
    handleRangeChange();
  }
};
window.onresize = resizeFn;
