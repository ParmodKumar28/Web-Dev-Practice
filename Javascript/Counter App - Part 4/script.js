//Write your javascript code here
const countValue = document.getElementById("count");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset");

increaseButton.addEventListener('click', () => {
    // Counter value
    const value = parseInt(countValue.textContent);
    countValue.textContent = value + 1;
});

decreaseButton.addEventListener('click', () => {
    // Counter value
    const value = parseInt(countValue.textContent);
    if(value > 0){
        countValue.textContent = value - 1;
    }
});

resetButton.addEventListener('click', () => {
    countValue.textContent = 0;
})
