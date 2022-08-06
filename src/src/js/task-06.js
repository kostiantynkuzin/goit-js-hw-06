const refs = {
  style: document.querySelector("style"),
  input: document.querySelector("input"),
  dataInput: document.querySelector('input[data-length="6"]'),
};

refs.dataInput.addEventListener("blur", inputBlur);

function inputBlur(event) {
  console.log(event.currentTarget.value.length);
  if (
    event.currentTarget.value.length === Number(refs.dataInput.dataset.length)
  ) {
    console.log(refs.input.setAttribute("id", "#validation-input.valid"));
  }
}
