function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyEl = document.querySelector("body");
const buttonEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");

//console.log(spanEl);

buttonEl.addEventListener("click", changeColor);
const randomColor = `${getRandomHexColor()}`;

function changeColor() {
  bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
  spanEl.innerHTML = `${getRandomHexColor()}`;
  console.log(randomColor);
}