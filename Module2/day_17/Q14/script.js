const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');
const searchInput = document.getElementById('search-input');

const STORAGE_KEY = 'tasks';

let tasks = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

function renderTasks(filter = '') {
    taskList.innerHTML = '';

    const filteredTasks = tasks.filter(task =>
        task.text.toLowerCase().includes(filter.toLowerCase())
    );

    if(filteredTasks.length === 0){
        taskList.innerHTML = '<li style="text-align:center; color:#666;">No tasks found.</li>';
        return;
    }

    filteredTasks.forEach(task => {
        const li = document.createElement('li');
        li.className = task.completed ? 'completed' : '';

        const span = document.createElement('span');
        span.textContent = task.text;
        span.style.cursor = 'pointer';

        span.addEventListener('click', () => {
            task.completed = !task.completed;
            saveAndRender();
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            tasks = tasks.filter(t => t.id !== task.id);
            saveAndRender();
        });

        li.appendChild(span);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}

function saveAndRender() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    renderTasks(searchInput.value);
}

addBtn.addEventListener('click', () => {
    const text = taskInput.value.trim();
    if(!text){
        alert('Task cannot be empty!');
        return;
    }

    const newTask = {
        id: Date.now(),
        text: text,
        completed: false
    };

    tasks.push(newTask);
    taskInput.value = '';
    saveAndRender();
});

searchInput.addEventListener('input', () => {
    renderTasks(searchInput.value);
});

renderTasks();