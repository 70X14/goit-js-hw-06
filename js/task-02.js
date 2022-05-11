const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("ul#ingredients");
const markup = ingredients
  .map((ingredients) => `<li class="item">${ingredients}</li>`)
  .join("");
list.insertAdjacentHTML("beforeend", markup);
list.innerHTML = markup;
