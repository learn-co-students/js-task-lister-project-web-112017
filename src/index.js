  let listsTable = {}
  let tasksTable = {}

  let createTaskForm = document.getElementById('create-task-form')
  createTaskForm.style = "display: none"

document.addEventListener('DOMContentLoaded', () => {
  console.log("The DOM content has loaded");
  // your code here ....
  //Functions
  function handleAddTask(e){
    e.preventDefault()
    // get form elements
    let taskDescription = document.getElementById('new-task-description')
    let priorityLevel = document.getElementById('new-task-priority')
    let selectList = document.getElementById('parent-list')

    if (priorityLevel.value === '' || taskDescription.value ==='' || selectList.value === ''){
      alert("You need to have a value for Select List, Task Description, and Priority Level!")
      return 'nothing'
    }

    let newTask = new Task(taskDescription.value, priorityLevel.value)
    //connect select option value to the id option.
    let options = document.getElementsByTagName('option')

    debugger
    let parentListId;
    //loop through options to find parent list id.
    for (let temp of options){
      if (temp.value === selectList.value){
        parentListId = temp.getAttribute('data-id')
      }
    }
    //make association
    newTask.setList(listsTable[parentListId])
    listsTable[parentListId].addTask(newTask)
    tasksTable[newTask.id] = newTask

    //append task information to parentList
    //have to re-find parent list
    let taskList = document.getElementById(`task-list-${parentListId}`)
    let newListItem = document.createElement('li')
    newListItem.innerHTML = `Task: ${taskDescription.value} <br> Priority: ${priorityLevel.value}`
    taskList.appendChild(newListItem)

    //blank out forms
    taskDescription.value = ''
    priorityLevel.value = ''

  }
  function handleTaskListReload(){
    let parentList = document.getElementById('parent-list')

    //remove all current child elements
    while (parentList.firstChild){
      parentList.removeChild(parentList.firstChild)
    }
    //readd for every obj in listsTable
    for(let key of Object.keys(listsTable)) {
      let newElement = document.createElement('option')
      let newText = document.createTextNode(listsTable[key].title)
      newElement.appendChild(newText)
      newElement.setAttribute('data-id',key)
      parentList.appendChild(newElement)
    }

    if (Object.keys(listsTable).length === 0){
      let createTaskForm = document.getElementById('create-task-form')
      createTaskForm.style = "display: none"
    }

  }

  function handleAddList(e) {
    //prevent default form action
    e.preventDefault()
    // get text input
    let titleField = document.getElementsByTagName('input')[0].value

    if (titleField !== "") {
    //append to section id lists <div class = 'list'>
    let listsSection = document.getElementById('lists')
    //create node
    let newListElement = document.createElement('div')
    newListElement.className += 'list'
    newListElement

    //create h2 element to go in node && button
    let newH2 = document.createElement('h2')
    let newListObj = new List(titleField)
    listsTable[newListObj.id] = newListObj
    newH2.innerHTML = `<button data-id= "${newListObj.id}" class="delete-list">X</button>${titleField}`
    let deleteButton = newH2.children[0]
    deleteButton.addEventListener('click', handleDeleteList)
    newListElement.appendChild(newH2)

    //append unordered lists
    let newUnordered = document.createElement('ul')
    newUnordered.setAttribute('id', `task-list-${newListObj.id}`)
    newListElement.appendChild(newUnordered)
    // append to section
    listsSection.appendChild(newListElement)
    //Reset form text
    document.getElementsByTagName('input')[0].value = ''
    //unhide create task form
    let taskForm = document.getElementById('create-task-form')
    taskForm.style = ""

    handleTaskListReload()

  }

  }
  // Add Event Listeners
  function handleDeleteList(e){
    debugger
    e.preventDefault()
    let listParent = e.target.parentNode.parentNode
    let listsSection = document.getElementById('lists')
    listsSection.removeChild(listParent)
    //debugger
    delete listsTable[e.target.getAttribute('data-id')]
    handleTaskListReload()
  }

  let newListTitleInput = document.getElementsByTagName('input')[1]
  newListTitleInput.addEventListener('click', handleAddList)


  let createTaskButton = document.getElementsByTagName('input')[4]
  createTaskButton.addEventListener('click', handleAddTask)


});
