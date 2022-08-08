const navEl = document.querySelector("#categories");
//console.log(`Number of categories: ${navEl.children.length}`);

const itemsEl = navEl.querySelectorAll("li.item");
//console.log(itemsEl);

itemsEl.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
