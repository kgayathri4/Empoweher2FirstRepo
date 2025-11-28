const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;

    const completeBtn = document.createElement('button');
    completeBtn.textContent = "Complete";
    completeBtn.style.marginLeft = "10px";

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.style.marginLeft = "5px";

    completeBtn.addEventListener('click', () => {
        li.style.textDecoration = "line-through";
        li.style.color = "green";
    });

    deleteBtn.addEventListener('click', () => {
        li.remove();
    });

    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = ""; 
});