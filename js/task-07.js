let span = document.querySelector("#text");
let input = document.querySelector("#font-size-control");
input.addEventListener("input", (event) => {
  let size = input.value;
  span.style.fontSize = size + "px";
});
