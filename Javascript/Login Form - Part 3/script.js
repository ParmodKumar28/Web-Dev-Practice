//Write your javascript code here
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("pass");

document.getElementById("btn").addEventListener("click", (event) => {
  event.preventDefault();
  let nameValue = nameInput.value;
  let emailValue = emailInput.value;
  let passwordValue = passwordInput.value;
  if (
    validatePassword(passwordValue) &&
    validateEmail(emailValue) &&
    validateName(nameValue)
  ) {
    alert("Form submitted successfully.");
    nameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
  } else {
    alert("Fill the form correctly.");
  }
});

function validatePassword(password) {
  if (password.length < 8) {
    return false;
  }
  if (!password.includes("@")) {
    return false;
  }
  return true;
}

function validateEmail(email) {
  return email.endsWith("@codingninjas.com");
}

function validateName(name) {
  return /^[A-Za-z\s]+$/.test(name);
}

document.getElementById("cancelbtn").addEventListener('click', (event) => {
    event.preventDefault();
    nameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
});
