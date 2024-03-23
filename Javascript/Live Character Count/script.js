//Write your javascript here
let textarea = document.getElementById("textInput");
let span = document.getElementById("charCount");

textarea.addEventListener('input', () => {
    const characters = textarea.value.length;
    span.textContent = characters;
});