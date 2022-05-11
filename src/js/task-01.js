const categories = document.querySelectorAll("ul#categories > li.item");
console.log(`Number of categories: ${categories.length}`);
categories.forEach((e) => {
  const title = [...e.children].find((t) => t.localName === "h2");
  const list = [...e.children].find((t) => t.localName === "ul");
  console.log(
    `Category: ${title.textContent}\nElements: ${list.children.length}`
  );
});
