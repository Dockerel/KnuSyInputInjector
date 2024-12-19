const button = document.createElement("button");

button.id = "inject";
button.textContent = "검색";

button.style.position = "absolute";
button.style.top = "50px";
button.style.left = "50px";
button.style.padding = "10px";
button.style.backgroundColor = "#DD938D";
button.style.color = "white";
button.style.fontWeight = "400";
button.style.borderRadius = "10px";
button.style.border = "1px solid #ccc";
button.style.cursor = "move";
button.style.zIndex = "1000";

button.addEventListener("mouseover", () => {
  button.style.backgroundColor = "#B96D67";
});

button.addEventListener("mouseout", () => {
  button.style.backgroundColor = "#DD938D";
});

let isDragging = false;
let hasMoved = false;
let offsetX = 0;
let offsetY = 0;

button.addEventListener("mousedown", (e) => {
  isDragging = true;
  hasMoved = false;
  offsetX = e.clientX - button.offsetLeft;
  offsetY = e.clientY - button.offsetTop;
  button.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    hasMoved = true;
    button.style.left = `${e.clientX - offsetX}px`;
    button.style.top = `${e.clientY - offsetY}px`;
  }
});

let scwin;

document.addEventListener("mouseup", () => {
  scwin = window.scwin;
  console.log(typeof window);
  console.log(window);
  if (isDragging && !hasMoved) {
    scwin.searchParamInput();
  }
  isDragging = false;
  button.style.cursor = "move";
});

document.body.appendChild(button);
