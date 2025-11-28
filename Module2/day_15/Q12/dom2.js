const itemList = document.querySelector('#item-list');
const addBtn = document.querySelector('#add-btn');

addBtn.addEventListener('click', () => {
    const newItem = document.createElement('li');

    // Set text for new list item
    const itemCount = itemList.children.length + 1;
    newItem.textContent = `Item ${itemCount}`;

    // Apply styling based on odd/even index
    if (itemCount % 2 === 1) {
        newItem.style.fontWeight = 'bold';
        newItem.style.color = 'blue';
    } else {
        newItem.style.fontStyle = 'italic';
        newItem.style.color = 'red';
    }

    // Add to list
    itemList.appendChild(newItem);
});