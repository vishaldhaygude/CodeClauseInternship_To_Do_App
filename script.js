
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('add-task-form');
    const input = document.getElementById('task');
    const todoList = document.getElementById('todo-list');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const taskText = input.value.trim();

        if (taskText !== '') {
            addTask(taskText);
            input.value = '';
        }
    });

    function addTask(taskText) {
        const listItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        const label = document.createElement('label');
        label.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'btn';
        deleteButton.addEventListener('click', function () {
            listItem.remove();
        });

        listItem.appendChild(checkbox);
        listItem.appendChild(label);
        listItem.appendChild(deleteButton);

        todoList.appendChild(listItem);
    }
});