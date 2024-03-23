// Element's reference
const noteTitleInput = document.querySelector("#noteTitle");
const noteContentInput = document.querySelector("#noteContent");

// Function's
function saveNote() {
  console.log("called");
  const title = noteTitleInput.value;
  const content = noteContentInput.value;

  //     Creating a note object and storing to localStorage
  const notes = [];

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
}
