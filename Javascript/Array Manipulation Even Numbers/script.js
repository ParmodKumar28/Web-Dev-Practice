const arrayInputElement = document.getElementById("arrayInput");
const resultElement = document.getElementById("result");

function filterEvenNumbers(){
    const arrValues = arrayInputElement.value;
    const arr = arrValues.split(",").map(Number);
    const evenNumbers = arr.filter((value) => value%2 === 0);
    console.log(evenNumbers);
    resultElement.textContent = "[" + evenNumbers.join(", ") + "]";
}
