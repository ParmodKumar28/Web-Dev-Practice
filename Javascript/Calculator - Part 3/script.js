const displayInput = document.querySelector("#result");
const userInput = document.querySelector("#userInputs");

function appendToDisplay(value){
    displayInput.value += value;
}

function clearDisplay(){
    displayInput.value = "";
}

function calculate(){
    try{
        displayInput.value = eval(displayInput.value);
    }
    catch(error){
        displayInput.value = "Error"
    }
}