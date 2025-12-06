import { displayTodos } from "../modules/displayTodos.js";

// Access control
const loggedIn = localStorage.getItem("loggedIn");
if (loggedIn !== "true") {
  alert("Please login first!");
  window.location.href = "login.html";
}

// Fetch todos
async function loadTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  displayTodos(data.slice(0, 20)); // Display first 20 todos
}

loadTodos();
