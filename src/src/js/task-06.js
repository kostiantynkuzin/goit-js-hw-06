const input = document.querySelector("#validation-input");

input.addEventListener("blur", inputBlur);

function inputBlur() {
  if (+input.value.length === +input.dataset.length) {
    return input.classList.remove("invalid"), input.classList.add("valid");
  } else input.classList.remove("valid"), input.classList.add("invalid");
}
