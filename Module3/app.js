import {
  db, collection, addDoc, onSnapshot,
  deleteDoc, doc, updateDoc
} from "./firebase.js";

const bookList = document.getElementById("bookList");
const bookForm = document.getElementById("bookForm");
const bookCol = collection(db, "books");

// Real-time Listener
onSnapshot(bookCol, (snapshot) => {
  const books = [];
  snapshot.forEach(doc => {
    books.push({ id: doc.id, ...doc.data() });
  });
  renderBooks(books);
});

// Render book cards
function renderBooks(books) {
  bookList.innerHTML = "";

  books.forEach(book => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${book.coverImageURL}" />
      <h3>${book.title}</h3>
      <p><b>Author:</b> ${book.author}</p>
      <p><b>Price:</b> $${book.price}</p>

      <button class="update-btn">Update Author</button>
      <button class="delete-btn">Delete</button>
      <button class="view-btn">View Details</button>
    `;

    // Update author
    card.querySelector(".update-btn").addEventListener("click", async () => {
      const newAuthor = prompt("Enter new author name", book.author);
      if (newAuthor) {
        await updateDoc(doc(db, "books", book.id), { author: newAuthor });
      }
    });

    // Delete
    card.querySelector(".delete-btn").addEventListener("click", async () => {
      await deleteDoc(doc(db, "books", book.id));
    });

    // View details
    card.querySelector(".view-btn").addEventListener("click", () => {
      alert(`
        Title: ${book.title}
        Author: ${book.author}
        Price: $${book.price}
        Image: ${book.coverImageURL}
      `);
    });

    bookList.appendChild(card);
  });
}

// Add new book
bookForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const newBook = {
    title: bookForm.title.value,
    author: bookForm.author.value,
    price: Number(bookForm.price.value),
    coverImageURL: bookForm.image.value
  };

  await addDoc(bookCol, newBook);

  bookForm.reset();
});
