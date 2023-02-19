const tasks = [];
const input = document.getElementById('taskInput');
const taskContainer = document.getElementById('tasks');

function createTask() {
    const taskName = input.value;
    tasks.push(taskName);
    renderTasks();
    input.value = '';
}

function renderTasks() {
    let tasksHtml = '';
    for (const taskIndex in tasks) {
        const itemHtml = `<li>${tasks[taskIndex]} <button class="removeTodo" onclick="deleteItem(${taskIndex});">Remove</button></li>`;
        tasksHtml = `${tasksHtml}${itemHtml}`;
    }
    taskContainer.innerHTML = tasksHtml;
}

function deleteItem(index) {
    tasks.splice(index, 1);
    renderTasks();
}