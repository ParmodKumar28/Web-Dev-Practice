const arrayInputElement = document.querySelector("#arrayInput");
const resultElement = document.querySelector("#result");
function filterOddNumbers(){
    const arrayValues = arrayInputElement.value;
    const arr = arrayValues.split(",").map(Number);
    const oddNumbers = arr.filter((value) => value%2 !== 0);
    resultElement.textContent = `[${oddNumbers.join(", ")}]`;
}