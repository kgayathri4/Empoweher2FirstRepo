const notesTextarea = document.getElementById('notes');
const saveBtn = document.getElementById('save-btn');
const loadBtn = document.getElementById('load-btn');
const clearBtn = document.getElementById('clear-btn');

const STORAGE_KEY = 'userNotes';

function loadNotesOnStart() {
    const savedNotes = localStorage.getItem(STORAGE_KEY);
    if (savedNotes) {
        notesTextarea.value = savedNotes;
    }
}

saveBtn.addEventListener('click', () => {
    const notes = notesTextarea.value.trim();

    if (!notes) {
        alert("Cannot save empty notes!");
        return;
    }

    localStorage.setItem(STORAGE_KEY, notes);
    alert("Notes saved successfully!");
});

loadBtn.addEventListener('click', () => {
    const savedNotes = localStorage.getItem(STORAGE_KEY);

    if (savedNotes) {
        notesTextarea.value = savedNotes;
        alert("Notes loaded successfully!");
    } else {
        alert("No saved notes found.");
    }
});

clearBtn.addEventListener('click', () => {
    localStorage.removeItem(STORAGE_KEY);
    notesTextarea.value = '';
    alert("Notes cleared successfully!");
});

window.addEventListener('DOMContentLoaded', loadNotesOnStart);