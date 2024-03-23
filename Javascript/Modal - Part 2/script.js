const openModalButton = document.getElementById("openModalBtn");
const closeModalButton = document.getElementById("closeModalBtn");
const modal = document.getElementById("myModal");

// Function here
openModalButton.addEventListener("click", () => {
  modal.style.display = "block";
});

// Close
closeModalButton.addEventListener("click", () => {
  modal.style.display = "none";
});
