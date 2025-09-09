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

saveBtn.addEventListener("click", (event)=>{
    event.preventDefault();

    let heading = noteHeading.value.trim();
    if (heading === "") {
        warningText.textContent="Title is required!";
        return;
    }
    
    let note = {
    id: Date.now(),
    heading: noteHeading.value,
    text: noteText.value
        };
    notes.push(note);
    saveNotes();
    renderNotesDisplay(note);
    noteHeading.value = "";
    noteText.value = "";
})

//-----------------
//helper functions
//-----------------

function saveNotes() {
        localStorage.setItem("myNotes", JSON.stringify(notes)); 
      }

function renderNotesDisplay(note) {
    let div = document.createElement("div");
    div.classList.add("saved-note");
    div.dataset.id = note.id;

    let divHeading = document.createElement("div");
    divHeading.classList.add("saved-note-heading");

    let h2 = document.createElement("h2");
    h2.textContent = note.heading;

    //edit icon
    let editIcon = document.createElement("img");
    editIcon.src = "./icons/edit_square_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"; 
    editIcon.alt = "Edit";
    editIcon.classList.add("edit-note");

    editIcon.addEventListener("click", () => {
    noteHeading.value = note.heading;
    noteText.value = note.text;
    
    div.remove();
    notes = notes.filter(n => n.id !== note.id);
    });

    //delete icon
    let deleteIcon = document.createElement("img");
    deleteIcon.src = "./icons/delete_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"; 
    deleteIcon.alt = "Delete";
    deleteIcon.classList.add("delete-note");

    deleteIcon.addEventListener("click", () => {
    div.remove();
    notes = notes.filter(n => n.id !== note.id);
    saveNotes();
    });

    let p = document.createElement("p");
    p.textContent = note.text;

    divHeading.appendChild(h2);
    divHeading.appendChild(editIcon);
    divHeading.appendChild(deleteIcon);
    div.appendChild(divHeading);
    div.appendChild(p);
    notesDisplay.appendChild(div);
}

window.addEventListener("load", loadNotes);
function loadNotes() {
        const saved = localStorage.getItem("myNotes");
        if (saved) {
          notes = JSON.parse(saved); 
          notes.forEach((item) => renderNotesDisplay(item)); 
        }
      }

