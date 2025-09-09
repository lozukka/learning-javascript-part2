console.log("hello")
// variables
let notes = [];
let notesDisplay = document.getElementById("saved-notes");
let saveBtn = document.getElementById("save-note");
let deleteBtn = document.getElementById("delete-note");
let noteHeading = document.getElementById("note-heading");
let noteText = document.getElementById("note-text");
let warningText = document.getElementById("warning");

//----------------
//main function
//----------------
//eventlistener->fetch userinput->validate note
//save note local
//render note
saveBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    let note = {noteHeading, noteText}
    //let note = noteText.value;
    console.log(note);
    notes.push(note);
    saveNotes();
    renderNotesDisplay(note);
    noteText.value = "";
})

//-----------------
//helper functions
//-----------------
//fetch user input
//validate note
//function validateUserInput(){}
//save note to local
function saveNotes() {
        localStorage.setItem("myNotes", JSON.stringify(notes)); 
      }
//render notes
function renderNotesDisplay(note) {
        let li = document.createElement("li");
        li.textContent = note;
        notesDisplay.appendChild(li);
      }
//edit the note

//delete the note

//render notes when refreash page
window.addEventListener("load", loadNotes);
function loadNotes() {
        const saved = localStorage.getItem("myNotes");
        if (saved) {
          notes = JSON.parse(saved); 
          notes.forEach((item) => renderNotesDisplay(item)); 
        }
      }

