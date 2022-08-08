const input = document.querySelector("#name-input");

const span = document.querySelector("#name-output");

input.addEventListener("input", inputText);

function inputText(event) {
  if (input.value === "") {
    return (span.textContent = "Anonymos");
  } else span.textContent = event.currentTarget.value;
}
