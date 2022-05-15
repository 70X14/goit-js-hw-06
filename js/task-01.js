const categories = document.querySelectorAll("ul#categories > li.item");
console.log(`Number of categories: ${categories.length}`);
categories.forEach((e) => {
  const title = document.querySelector("h2");
  const list = document.querySelector("li.item > ul > li");
  console.log(
    `Category: ${title.textContent}\nElements: ${list.children.length}`
  );
});
