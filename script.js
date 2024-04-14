const noteContent = document.querySelector("#note-content");
const noteColor = document.querySelector("#note-color");
const noteCreateBtn = document.querySelector("#note-creation-section > button");
const notesContainer = document.querySelector("#notes-container");
let emptyNotesMessage = document.querySelector("#empty-notes-message");

noteCreateBtn.addEventListener("click", (e) => {
    if (noteContent.value === "") {
        alert("Please input a note");
        return;
    } else {
        if (!emptyNotesMessage.classList.contains("hidden")) {
            emptyNotesMessage.classList.add("hidden");
        }

        // Get current date and time with the month name
        const now = new Date();
        const optionsDate = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = now.toLocaleDateString(undefined, optionsDate);
        const formattedTime = now.toLocaleTimeString();

        // Creating a new div for the note
        let noteDiv = document.createElement("div");
        noteDiv.classList.add("note");
        noteDiv.style.backgroundColor = noteColor.value;
        noteDiv.innerHTML = `
            <p>${noteContent.value}</p>
            <span class="close-btn">X</span>
        `;

       
        let dateDiv = document.createElement("div");
        dateDiv.textContent = `Date: ${formattedDate}`;

        let timeDiv = document.createElement("div");
        timeDiv.textContent = `Time: ${formattedTime}`;

        
        notesContainer.appendChild(dateDiv);
        notesContainer.appendChild(timeDiv);
        notesContainer.appendChild(noteDiv);

        noteContent.value = "";  
    }
});

notesContainer.addEventListener("click", (e) => {
    if (e.target.innerText === "X") {
        e.target.parentNode.nextElementSibling.nextElementSibling.remove(); 
        e.target.parentNode.previousElementSibling.remove(); 
        e.target.parentNode.remove(); 
    }

    if (notesContainer.children.length === 0) {  
        emptyNotesMessage.classList.remove("hidden");
    }
});
