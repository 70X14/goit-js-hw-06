let counterValue = 0;
const counterSpan = document.querySelector("span#value");

const decrement = () => {
  counterValue--;
  counterSpan.innerHTML = counterValue;
};

const increment = () => {
  counterValue++;
  counterSpan.innerHTML = counterValue;
};

document
  .querySelector("button[data-action=increment]")
  .addEventListener("click", increment);

document
  .querySelector("button[data-action=decrement]")
  .addEventListener("click", decrement);
