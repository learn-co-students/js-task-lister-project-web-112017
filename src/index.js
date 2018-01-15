  let listsTable = {}
  let tasksTable = {}
document.addEventListener('DOMContentLoaded', () => {
  console.log("The DOM content has loaded");
  // your code here ....
  //Functions
  function handleTaskListReload(){
    let parentList = document.getElementById('parent-list')

    //remove all current child elements
    while (parentList.firstChild){
      parentList.removeChild(parentList.firstChild)
    }
    debugger
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

    //create h2 element to go in node && button
    let newH2 = document.createElement('h2')
    let newListObj = new List(titleField)
    listsTable[newListObj.id] = newListObj
    newH2.innerHTML = `<button data-id= "${newListObj.id}" class="delete-list">X</button>${titleField}`
    let deleteButton = newH2.children[0]
    deleteButton.addEventListener('click', handleDeleteList)
    newListElement.appendChild(newH2)
    // append to section
    listsSection.appendChild(newListElement)
    //Reset form text
    newListTitleInput.innerText = ''
    //unhide create task form
    let taskForm = document.getElementById('create-task-form')
    taskForm.style = ""

    handleTaskListReload()

  }

  }
  // Add Event Listeners
  function handleDeleteList(e){
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

  let createTaskForm = document.getElementById('create-task-form')
  createTaskForm.style = "display: none"


});
