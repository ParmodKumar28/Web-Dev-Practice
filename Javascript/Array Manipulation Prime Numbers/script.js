const arrayInputElement = document.getElementById("arrayInput");
const resultElement = document.getElementById("result");

function filterPrimes(){
    const arrValues = arrayInputElement.value; 
    const arr = arrValues.split(",").map(Number);
    const primeNumbers = arr.filter(isPrime);
    resultElement.textContent = "[" + primeNumbers.join(", ") + "]";
}

function isPrime(value){
    if(value < 2) return false;
    for(let i = 2; i <= Math.sqrt(value); i++){
        if(value % i === 0){
            return false;
        }
    }
    return true;
}
