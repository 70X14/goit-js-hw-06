const text = document.querySelector("#text");
document
  .querySelector("#font-size-control")
  .addEventListener("change", function () {
    text.style.fontSize = `${this.value}px`;
  });
