// Element's reference
const noteTitleInput = document.querySelector("#noteTitle");
const noteContentInput = document.querySelector("#noteContent");
const notesListDiv = document.querySelector("#notesList");
const searchInput = document.querySelector("#search");
let isSearched = false;
let filteredNotes = [];

// Function's
function saveNote() {
  const title = noteTitleInput.value;
  const content = noteContentInput.value;

  // Creating a note object and storing to localStorage
  const notes = JSON.parse(localStorage.getItem("notes")) || [];

  // New note
  const newNote = {
    title: title,
    content: content,
  };

  // Adding to notes and updating localStorage
  notes.push(newNote);
  localStorage.setItem("notes", JSON.stringify(notes));

  // Clearing values
  noteTitleInput.value = "";
  noteContentInput.value = "";
  displayNotes();
}

function displayNotes(filteredNotes) {
  // Clear notes list before rendering
  notesListDiv.innerHTML = "";

  const notes = filteredNotes || JSON.parse(localStorage.getItem("notes"));

  // Loop the notes and display here
  notes.forEach((note) => {
    const noteDiv = document.createElement("div");
    noteDiv.className = "note";

    noteDiv.innerHTML = `
            <input type="checkbox" class="note-checkbox">
            <h3 class="note-title">${note.title}</h3>
            <p class="note-content" id="wrap-it">${note.content}</p>
            <hr>
        `;
    notesListDiv.appendChild(noteDiv);
  });
  
  // Add event listeners to checkboxes
  const checkboxes = document.querySelectorAll(".note-checkbox");
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      // Update localStorage when checkbox state changes
      updateCheckedState(checkbox);
    });
  });
}

function deleteNote() {
  // Get all the checkboxes
  const checkboxes = Array.from(document.querySelectorAll(".note-checkbox"));

  // Get the notes from localStorage
  let notes = JSON.parse(localStorage.getItem("notes"));

  // Loop through the checkboxes in reverse order
  for (let i = checkboxes.length - 1; i >= 0; i--) {
    // If the checkbox is checked, remove the note from the notes array
    if (checkboxes[i].checked) {
      notes.splice(i, 1);
      checkboxes[i].parentNode.remove();
    }
  }

  // Update the notes in localStorage
  localStorage.setItem("notes", JSON.stringify(notes));
}

function clearAllNotes() {
  notesListDiv.innerHTML = "";
  localStorage.removeItem("notes");
}

function searchNotes() {
  isSearched = true;
  let searchQuery = searchInput.value.trim();
  const notes = localStorage.getItem("notes") ? JSON.parse(localStorage.getItem("notes")) : [];

  filteredNotes = notes.filter((note) => note.title.includes(searchQuery));
  displayNotes(filteredNotes);
}

// Update the checked state of notes in localStorage
function updateCheckedState(checkbox) {
  const index = Array.from(checkbox.parentNode.parentNode.parentNode.children).indexOf(checkbox.parentNode.parentNode);
  let notes = JSON.parse(localStorage.getItem("notes"));
  notes[index].checked = checkbox.checked;
  localStorage.setItem("notes", JSON.stringify(notes));
}

// Displaying all notes on window onload
window.onload = function() {
  displayNotes();
};
