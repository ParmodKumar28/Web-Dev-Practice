//Write your javascript code here
const countValue = document.getElementById("count");
const increaseButton = document.getElementById("increase");

increaseButton.addEventListener('click', () => {
    const value = parseInt(countValue.textContent);
    countValue.textContent = value + 1;
});