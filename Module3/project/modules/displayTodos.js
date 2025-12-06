export function displayTodos(data) {
  const container = document.getElementById("todo-container");
  container.innerHTML = "";

  data.forEach(todo => {
    const div = document.createElement("div");
    div.style.border = "1px solid #ccc";
    div.style.padding = "10px";
    div.style.margin = "10px 0";
    div.style.borderRadius = "6px";
    div.style.background = todo.completed ? "#d1ffd1" : "#fff";

    div.innerHTML = `
      <h3>${todo.title}</h3>
      <p>Status: ${todo.completed ? "✔ Completed" : "❌ Not Completed"}</p>
    `;

    container.appendChild(div);
  });
}
