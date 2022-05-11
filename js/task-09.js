function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
document.querySelector(".change-color").addEventListener("click", function () {
  const color = getRandomHexColor();
  document.body.style.background = color;
  document.querySelector("span.color").textContent = color;
});
