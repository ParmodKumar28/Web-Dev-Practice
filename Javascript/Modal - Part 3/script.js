const openModalButton = document.getElementById("openModalBtn");
const closeModalButton = document.getElementById("closeModalBtn");
const modal = document.getElementById("myModal");

// Open the modal
openModalButton.addEventListener('click', () => {
    modal.style.display = "block";
});

// Close the modal
closeModalButton.addEventListener('click', () => {
    modal.style.display = "none";
});

// Close the modal if the user clicks outside of it
document.body.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
