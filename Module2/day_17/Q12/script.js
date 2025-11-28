
const addBtn = document.getElementById('add-btn');
const removeBtn = document.getElementById('remove-btn');
const container = document.getElementById('paragraph-container');

addBtn.addEventListener('click', () => {
    const newParagraph = document.createElement('p'); 
    newParagraph.textContent = "This is a new paragraph.";

    container.appendChild(newParagraph); 
});

removeBtn.addEventListener('click', () => {
    if(container.lastChild) {
        container.removeChild(container.lastChild); 
    } else {
        alert("No paragraphs to remove!");
    }
});