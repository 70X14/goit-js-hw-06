const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
let list = document.querySelector("#ingredients");
const creatList = ingredients.forEach((ingridient) => {
  let li = document.createElement("li");
  li.className = "item";
  li.textContent = ingridient;
  list.append(li, li, li, li, li, li);
});
