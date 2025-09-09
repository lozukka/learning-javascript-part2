console.log("hello")
// variables
let notes = [];
let notesDisplay = document.getElementById("saved-notes");
let saveBtn = document.getElementById("save-note");
let deleteBtn = document.getElementById("delete-note");
let noteText = document.getElementById("note-text");

//----------------
//main function
//----------------
//eventlistener->fetch userinput->validate note
//save note local
//render note
saveBtn.addEventListener("click", (event)=>{
    let text = noteText.value;
    notes.push(text);
    saveNotes();
    renderNotesDisplay(text);
    noteText.value = "";
})

//-----------------
//helper functions
//-----------------
//fetch user input
//validate note
//save note to local
function saveNotes() {
        localStorage.setItem("myNotes", JSON.stringify(notes)); 
      }
//render notes
function renderNotesDisplay(text) {
        let li = document.createElement("li");
        li.textContent = text;
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

