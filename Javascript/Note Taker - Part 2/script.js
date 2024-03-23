// Element's reference
const noteTitleInput = document.querySelector("#noteTitle");
const noteContentInput = document.querySelector("#noteContent");
const notesListDiv = document.querySelector("#notesList");

// Function's
function saveNote() {
  const title = noteTitleInput.value;
  const content = noteContentInput.value;

  //     Creating a note object and storing to localStorage
  const notes = JSON.parse(localStorage.getItem("notes")) || [];

  //     New note
  const newNote = {
    title: title,
    content: content,
  };

  //     Adding to notes and updating localStorage
  notes.push(newNote);

  localStorage.setItem("notes", JSON.stringify(notes));

  //     Clearing values
  noteTitleInput.value = "";
  noteContentInput.value = "";

  displayNotes();
}

function displayNotes() {
  const notes = JSON.parse(localStorage.getItem("notes"));

  //     Loop the notes and display here
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
}
