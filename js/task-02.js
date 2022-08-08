const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const elements = ingredients.map((option) => {
  const newEl = document.createElement("li");
  newEl.textContent = option;
  newEl.classList.add("item");
  return newEl;
});
console.log(elements);

const navEl = document.querySelector("#ingredients");
navEl.append(...elements);
