const arrayInputElement = document.getElementById("arrayInput");
const resultElement = document.getElementById("result");

function reverseArray(){
    const arrValues = arrayInputElement.value;
    const arr = arrValues.split(",").map(Number);
    const reversedArray = arr.reverse();
    resultElement.textContent = "[" + reversedArray.join(", ") + "]";
}
