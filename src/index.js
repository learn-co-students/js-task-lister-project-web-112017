const store = {lists: [], tasks: []}


document.addEventListener('DOMContentLoaded', () => {
  console.log("The DOM content has loaded");


document.getElementById("create-task-form").style.visibility = "hidden"


  function addList () {
    let title = document.querySelector("#new-list-title").value
    if (title == "") {
      alert ("please enter a title")
      return false;
    } else {
    let newList = new List(title)
    let newDiv = document.createElement("div")
    let newTitle = document.createElement("h2")
    newTitle.innerHTML = newList.title
    let newULList = document.createElement("ul")
    newDiv.setAttribute("id", `list${newList.id}`)
    newDiv.appendChild(newTitle)
    newDiv.appendChild(newULList)
    document.querySelector('#lists').appendChild(newDiv)
    document.querySelector("#new-list-title").value = ''

    let selector = document.getElementById("parent-list")
    let option = document.createElement("option")
    option.text = newList.title
    selector.add (option)
   }
  }

 function addTask (){
   let description = document.querySelector("#new-task-description").value
   let priority = document.querySelector("#new-task-priority").value
   if (description ==
   "" || priority == "") {
     alert ("please enter valid forms")
     return false;
   } else {
   let selected = document.getElementById("parent-list").selectedIndex
   let listName = document.getElementsByTagName("option")[selected].value
   let list = List.findByTitle(listName)
   let newTask = new Task(description, priority, list)

  let newLI = document.createElement("li")
  newLI.innerText = `Task: ${description}
                     Priority: ${priority}`
  newLI.setAttribute("dataId", `${newTask.id}`)
  document.querySelector(`#list${list.id}`).appendChild(newLI)
  document.querySelector("#new-task-description").value = ''
  document.querySelector("#new-task-priority").value = ''
  }
 }

 function addListDeleteButton() {
     let deleteButton = document.createElement("button")
     deleteButton.setAttribute("class", "delete-list")
     deleteButton.innerText = 'X'
     let divs = document.querySelectorAll('#lists div')
     let divToAddOn = divs[divs.length-1]

     deleteButton.setAttribute('id', `${divToAddOn.id}-delete-button`)
     divToAddOn.querySelector('h2').appendChild(deleteButton)
 }
 function addTaskDeleteButton() {
     let deleteButton = document.createElement("button")
     deleteButton.setAttribute("class", "delete-task")
     deleteButton.innerText = 'X'
     let listItems = document.querySelectorAll('li')
     let listToAddOn = listItems[listItems.length-1]

     deleteButton.setAttribute('id', `${listToAddOn.attributes.dataid.value}-delete-button`)
     listToAddOn.appendChild(deleteButton)
 }


 let newListForm = document.querySelector("#create-list-form")

 newListForm.addEventListener('submit', function (event) {
   event.preventDefault()
   addList ()
   document.getElementById("create-task-form").style.visibility = "visible"
   addListDeleteButton()
 })


function handleListDelete(event) {
if (event.target.className === "delete-list") {
  event.preventDefault()
  let listName = event.target.parentNode.innerText.slice(0,-1)
  let selector = document.getElementById("parent-list")
  let listPosition = store.lists.findIndex(list => list.title === listName)
  let listIdToUse = store.lists[listPosition].id
  store.tasks = store.tasks.filter (task => task.listId !== listIdToUse)

  event.target.parentNode.parentNode.remove()
  selector.remove(listPosition)
  store.lists.splice(listPosition, 1)
  if (store.lists.length === 0) {
    document.getElementById("create-task-form").style.visibility = "hidden"
  }
}
}

function handleTaskDelete(event) {
if (event.target.className === "delete-task") {
  event.preventDefault()
  let taskPosition = parseInt(event.target.parentNode.attributes.dataid.value, 10)
  store.tasks = store.tasks.filter (task => task.id !== taskPosition)

  event.target.parentNode.remove()

}
}



const listContainer = document.querySelector('#lists')
listContainer.addEventListener('click', handleListDelete)
listContainer.addEventListener('click', handleTaskDelete)


 let newTaskForm = document.querySelector("#create-task-form")
 newTaskForm.addEventListener('submit', function (event) {
   event.preventDefault()
   addTask ()
   addTaskDeleteButton()
})


});
