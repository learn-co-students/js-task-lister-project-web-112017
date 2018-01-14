const listStore = {}

document.addEventListener('DOMContentLoaded', () => {

  console.log("The DOM content has loaded");

  const newList = document.getElementById('new-list-title');
  const listForm = document.getElementById('create-list-form');


  const taskForm = document.getElementById('create-task-form');
  const listDropDown = document.getElementById('parent-list');
  const newTask = document.getElementById('new-task-description');
  const newTaskPriority = document.getElementById('new-task-priority');


  const listsSection = document.getElementById("lists");

  if (Object.keys(listStore).length !== 0) {
    taskForm.style.display = "none";
  }

  function addListToDropdown(list) {
    let listOption = `<option data-id='${list.id}'>${list.title}</option>`;
    listDropDown.innerHTML += listOption;
  }

  function createDivForList(list) {
    let newList = `<div class="list"><h2><button data-id="${list.id}" class="delete-list">X</button>${list.title}</h2><ul></ul></div>`;
    listsSection.innerHTML += newList;
  }


  function createList(event) {
    event.preventDefault();

    const value = newList.value;
    let list = new List(value);
    listStore[list.id] = list.tasks;
    newList.value = '';
    if (taskForm.style.display === "none"){
      taskForm.style.display = "block";
    }

    addListToDropdown(list);
    createDivForList(list);
  }

  function findDivForList(listId) {
    for (div of listsSection.children) {
      if (div.children[0].children[0].dataset.id === listId) {
        return div;
      };
    };
  }

  function addTaskToList(task,listId) {
    let listForTask = findDivForList(listId).children[1]; // this is an unordered list
    let taskAsLi = `<li data-id="${task.id}">Task: ${task.description} <br> Priority: ${task.priority}</li>`;
    listForTask.innerHTML += taskAsLi;
  }

  function createTask(event) {
    event.preventDefault();

    let listSelectionId = listDropDown.options[listDropDown.selectedIndex].dataset.id;

    let taskDescription = newTask.value;
    let taskPriority = newTaskPriority.value;

    let task = new Task(taskDescription, taskPriority);
    listStore[listSelectionId].push(task);

    addTaskToList(task,listSelectionId);
    newTask.value = "";
    newTaskPriority.value = "";
  }

  function findOptionForListDropdown(listId) {
    for (option of listDropDown.children) {
      if (option.dataset.id === listId) {
        return option;
      };
    };
  }

  function deleteList(event) {
    if (event.target.className === "delete-list"){
      let listId = event.target.dataset.id;
      listsSection.removeChild(findDivForList(listId));
      listDropDown.removeChild(findOptionForListDropdown(listId));
      delete listStore[listId];
    }
  }


  listForm.addEventListener('submit', createList);
  taskForm.addEventListener('submit', createTask);
  listsSection.addEventListener('click', deleteList)

});
