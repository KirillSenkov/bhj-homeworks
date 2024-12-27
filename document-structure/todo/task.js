const tasksInput = document.querySelector('.tasks__input');
const tasksAddButton = document.querySelector('.tasks__add');
const tasksList = document.querySelector('.tasks__list');

function addTask() {
    const taskText = tasksInput.value.trim();
    if (taskText === '') return;

    const task = document.createElement('div');
    task.classList.add('task');
    task.innerHTML = `
    <div class="task__title">${taskText}</div>
    <a href="#" class="task__remove">&times;</a>
    `;

    const removeButton = task.querySelector('.task__remove');
    removeButton.addEventListener('click', (e) => {
    e.preventDefault();
    task.remove();
    });

    tasksList.appendChild(task);
    tasksInput.value = '';
}

tasksAddButton.addEventListener('click', (e) => {
    e.preventDefault();
    addTask();
});

tasksInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
    addTask();
    }
});