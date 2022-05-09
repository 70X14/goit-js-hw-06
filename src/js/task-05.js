const input = document.querySelector("input#name-input");
const span = document.querySelector("span#name-output");

document.addEventListener("input", (event) => {
  console.log(event.target.value);
  if (event.target.value !== "") {
    span.innerText = event.target.value;
  } else {
    span.innerText = "Anonymous";
  }
});
