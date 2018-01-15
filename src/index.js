// const store = { lists: [], tasks: [] }
// let deleteId = 0

const listsSection = document.getElementById('lists')
const taskForm = document.getElementById('create-task-form')
const taskSelector = document.getElementById('parent-list')

function showTasks() {
  if (listsSection.childElementCount > 0) {
    taskForm.style.display = 'block'
  } else {
    taskForm.style.display = 'none'
  }
}

showTasks()

document.addEventListener('DOMContentLoaded', () => {
  console.log("The DOM content has loaded");
  //javascript
  const listForm = document.getElementById('create-list-form')
  const listInput = document.getElementById('new-list-title')
  const taskForm = document.getElementById('create-task-form')
  const taskDescriptionInput = document.getElementById('new-task-description')
  const taskPriorityInput = document.getElementById('new-task-priority')

  function createList(event) {
    event.preventDefault();
    const newListName = listInput.value;
    const newDiv = document.createElement("div");
    const newHeader = document.createElement("h2");
    const headText = document.createTextNode(newListName);
    const newOption = document.createElement("option");
    newOption.id = 'task-selector-option-' + `${newListName}`;
    newOption.innerText = newListName;

    const newDeleteButton = document.createElement("button");
    newDeleteButton.innerText = 'X';
    newDeleteButton.id = 'list-delete-button-' + `${newListName}`;
    newDeleteButton.addEventListener('click', deleteList)
    const newUl = document.createElement('ul');
    newUl.id = 'list-tasks-' + `${newListName}`;

    newHeader.appendChild(newDeleteButton);
    newHeader.appendChild(headText);
    newDiv.appendChild(newHeader);
    newDiv.appendChild(newUl);
    listsSection.appendChild(newDiv);
    taskSelector.appendChild(newOption);
    listInput.value = '';
    showTasks()
  }

  function deleteList(event) {
    event.preventDefault();
    const taskSelectorOption = document.getElementById('task-selector-option-' + this.id.split("list-delete-button-")[1])
    const deleteButton = document.getElementById(this.id)
    const buttonDiv = deleteButton.parentNode.parentNode
    listsSection.removeChild(buttonDiv)
    taskSelector.removeChild(taskSelectorOption)
  }

  function createTask(event) {
    event.preventDefault();
    const listUl = document.getElementById('list-tasks-' + `${this.children[1].value}`);
    const newTaskDescription = taskDescriptionInput.value;
    const newTaskPriority = taskPriorityInput.value;

    const newLi = document.createElement('li');
    newLi.innerHTML = `${newTaskDescription}` + '<br>' + `${newTaskPriority}`;

    listUl.appendChild(newLi);
    taskDescriptionInput.value = ''
    taskPriorityInput.value = ''
    showTasks()
  }

  listForm.addEventListener('submit', createList)
  taskForm.addEventListener('submit', createTask)

});
