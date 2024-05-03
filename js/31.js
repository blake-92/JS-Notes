// Input events to be captured: keydown, keyup

const inputName = document.querySelector("#nombre");

inputName.addEventListener("input", (event) => {
  console.log(event.target.value);
});

const inputPassword = document.querySelector("#password");
inputPassword.addEventListener("input", passwordCheck);

function passwordCheck() {
  inputPassword.type = "text";

  setTimeout(() => {
    inputPassword.type = "password";
  }, 300);
}
