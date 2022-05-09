const boxes = document.querySelector("#boxes");

const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const input = document.querySelector("#amount");

const generateRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const createBoxes = (amount) => {
  let boxesInner = "";
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    const color = generateRandomHexColor();
    box.style.height = `${30 + 10 * i}px`;
    box.style.width = `${30 + 10 * i}px`;
    box.style.margin = "10px";
    box.style.background = color;
    boxesInner += box.outerHTML;
  }
  boxes.innerHTML = boxesInner;
};

buttonCreate.addEventListener("click", () => {
  console.log("hi");
  createBoxes(input.value);
});
buttonDestroy.addEventListener("click", () => (boxes.innerHTML = ""));
