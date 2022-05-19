const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
let list = document.querySelector("#ingredients");
let push = [];
ingredients.forEach((ingridient) => {
  let li = document.createElement("li");
  li.className = "item";
  li.textContent = ingridient;
  push.push(li);
});
list.append(...push);
