const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const elements = [];
for (let i = 0; i < ingredients.length; i++) {
  const option = ingredients[i];
  const newEl = document.createElement("li");
  newEl.textContent = option;
  newEl.classList.add("item");
  elements.push(newEl);
}
console.log(elements);
const navEl = document.querySelector("#ingredients");
navEl.append(...elements);
