const input = document.querySelector("#validation-input");

input.addEventListener("blur", inputBlur);

function inputBlur() {
  if (Number(input.value.length) === Number(input.dataset.length)) {
    return input.classList.remove("invalid"), input.classList.add("valid");
  } else input.classList.remove("valid"), input.classList.add("invalid");
}
