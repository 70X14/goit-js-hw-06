const input = document.querySelector("#validation-input");
input.addEventListener("blur", (event) => {
  if (event.target.value.length == input.dataset.length) {
    input.className = "valid";
  } else {
    input.className = "invalid";
  }
});
