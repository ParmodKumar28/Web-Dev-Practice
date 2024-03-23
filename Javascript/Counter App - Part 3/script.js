//Write your javascript code here
const countValue = document.getElementById("count");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");

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
})
