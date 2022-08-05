const nav = document.querySelector("#categories");
const categories = nav.children;
console.log("Number of categories:", categories.length);
for (let i = 0; i < categories.length; i++) {
  console.log("Category:", categories[i].firstElementChild.textContent);
  console.log("Elements:", categories[i].lastElementChild.children.length);
}
