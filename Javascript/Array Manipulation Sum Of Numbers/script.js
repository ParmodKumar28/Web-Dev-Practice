const arrayInputElement = document.getElementById("arrayInput");
const resultElement = document.getElementById("result");

function sumArray(){
    const arrValues = arrayInputElement.value;
    const arr = arrValues.split(",").map(Number); // Convert string to numbers
    const sum = arr.reduce((sum, value) => sum += value, 0);
    resultElement.textContent = sum;
}
