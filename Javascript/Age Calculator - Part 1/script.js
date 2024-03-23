//Write your javascript code here
const birthdayInput = document.getElementById("birthday");
const container = document.getElementById("container");
const resultDiv = document.getElementById("result");

function calculate() {
  if (!birthdayInput.value) {
    alert("Enter you birth date please!");
  } else {
    let birthday = new Date(birthdayInput.value);
    let today = new Date();
    let age = today.getFullYear() - birthday.getFullYear();
    let monthDiff = today.getMonth() - birthday.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthday.getDate())
    ) {
      age--;
    }
    // Result div
    resultDiv.textContent = age;
    resultDiv.style.display = "block";
    container.append(resultDiv);
  }
}
