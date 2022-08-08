const loginFormEl = document.querySelector("form.login-form");
const emailEl = loginFormEl.querySelector('[type="email"]');
const passwordEl = loginFormEl.querySelector('[type="password"]');

loginFormEl.addEventListener("submit", inputText);
function inputText(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Please fill in all fields");
  }
  console.log(`Email: ${email.value}, Password: ${password.value} `);
  event.currentTarget.reset();
}
