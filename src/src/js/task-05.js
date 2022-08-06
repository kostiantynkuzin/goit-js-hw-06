const refs = {
  input: document.querySelector("#name-input"),

  span: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", inputText);

function inputText(event) {
  console.log(event.currentTarget.value);
  refs.span.textContent = event.currentTarget.value;
}
