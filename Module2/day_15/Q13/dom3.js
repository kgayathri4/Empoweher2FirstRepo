const bgColorInput = document.getElementById('bg-color-input');
const textInput = document.getElementById('text-input');
const contentBox = document.getElementById('content-box');

const changeBgBtn = document.getElementById('change-bg-btn');
const updateTextBtn = document.getElementById('update-text-btn');

// Change Background Color
changeBgBtn.addEventListener('click', () => {
    const colorValue = bgColorInput.value.trim();

    if (colorValue === "") {
        alert("Please enter a color name!");
        return;
    }

    // Validate color by applying temporarily
    const tempDiv = document.createElement('div');
    tempDiv.style.backgroundColor = colorValue;

    if (tempDiv.style.backgroundColor) {
        contentBox.style.backgroundColor = colorValue;
    } else {
        alert("Invalid color name!");
    }
});

// Update Text Content
updateTextBtn.addEventListener('click', () => {
    const textValue = textInput.value.trim();

    if (textValue === "") {
        alert("Please enter some text!");
    } else {
        contentBox.textContent = textValue;
    }
});