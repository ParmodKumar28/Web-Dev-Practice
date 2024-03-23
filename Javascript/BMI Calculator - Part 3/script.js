const weightInput = document.querySelector("#weight");
const heightInput = document.querySelector("#height");
const resultDiv = document.getElementById("result");

function calculateBMI(){
    const weight = weightInput.value;
    let height = heightInput.value/100;
    height = height * height;
    const bmi = (weight/height).toFixed(2);
    resultDiv.textContent = bmi;
}