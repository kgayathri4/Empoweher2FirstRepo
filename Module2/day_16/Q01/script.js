const DEFAULT_IMAGE = "https://m.media-amazon.com/images/I/712818P3inL._SY522_.jpg";

let books = [];

const bookForm = document.getElementById('book-form');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const categorySelect = document.getElementById('category');
const booksGrid = document.getElementById('books-grid');

const filterSelect = document.getElementById('filter');
const sortAZBtn = document.getElementById('sort-az');
const sortZABtn = document.getElementById('sort-za');

function renderBooks(filter = 'All'){
    booksGrid.innerHTML = '';

    let filteredBooks = (filter === 'All') ? books : books.filter(b => b.category === filter);

    if(filteredBooks.length === 0){
        booksGrid.innerHTML = '<p class="empty">No books to display.</p>';
        return;
    }

    filteredBooks.forEach((book, index) => {
        const card = document.createElement('div');
        card.className = 'card';

        const img = document.createElement('img');
        img.src = book.imageUrl;

        const h4 = document.createElement('h4');
        h4.textContent = book.title;

        const author = document.createElement('p');
        author.textContent = `Author: ${book.author}`;

        const cat = document.createElement('small');
        cat.textContent = book.category;

        const controls = document.createElement('div');
        controls.className = 'controls';

        const completeBtn = document.createElement('button');
        completeBtn.className = 'complete-btn';
        completeBtn.textContent = 'Complete';
        completeBtn.addEventListener('click', () => {
            h4.style.textDecoration = h4.style.textDecoration === 'line-through' ? '' : 'line-through';
            h4.style.opacity = h4.style.opacity === '0.7' ? '' : '0.7';
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            books = books.filter(b => b !== book);
            renderBooks(filterSelect.value);
        });

        controls.appendChild(completeBtn);
        controls.appendChild(deleteBtn);

        card.appendChild(img);
        card.appendChild(h4);
        card.appendChild(author);
        card.appendChild(cat);
        card.appendChild(controls);

        booksGrid.appendChild(card);
    });
}

// Add Book
bookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = titleInput.value.trim();
    const author = authorInput.value.trim();
    const category = categorySelect.value;

    if(!title || !author){
        alert('Please fill both Title and Author.');
        return;
    }

    books.push({
        title,
        author,
        category,
        imageUrl: DEFAULT_IMAGE
    });

    titleInput.value = '';
    authorInput.value = '';
    categorySelect.value = 'Fiction';

    renderBooks(filterSelect.value);
});

// Sort A → Z
sortAZBtn.addEventListener('click', () => {
    books.sort((a,b) => a.title.localeCompare(b.title));
    renderBooks(filterSelect.value);
});

// Sort Z → A
sortZABtn.addEventListener('click', () => {
    books.sort((a,b) => b.title.localeCompare(a.title));
    renderBooks(filterSelect.value);
});

// Filter by category
filterSelect.addEventListener('change', () => {
    renderBooks(filterSelect.value);
});

// Initial render
renderBooks();