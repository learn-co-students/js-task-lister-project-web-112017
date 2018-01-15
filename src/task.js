/*
task is responsible for creating a single task object
*/
const Task = (() => {
  let id = 1
  return class Task {
    constructor(description, priority, list) {
      this.description = description
      this.priority = priorty
      this.id = ++id
      if(list) {
        this.listId = list.id
      }
      store.tasks.push(this)
    }
    setList(list) {
      this.listId = list.id
    }
  }

})()


const newTaskForm = document.querySelector("form#create-task-form")
const newTaskParent = document.querySelector("#parent-list")
const newTaskDescrip = document.querySelector("#new-task-description")
const newTaskPriority = document.querySelector("#new-task-priority")

function handleNewTask(event) {
  event.preventDefault()


  const taskDescrip = newTaskDescrip.value
  const taskPriority = newTaskPriority.value

  let taskItem = document.createElement("li")


  // const listDiv = document.querySelector(`div#list-${newTaskParent.value}`)
  document.querySelector(`div.list#${newTaskParent.value}`).appendChild(taskItem)
  console.log(`div.list#${newTaskParent.value}`)
  console.log(document.querySelector(`div.list#${newTaskParent.value}`))
  console.log(taskItem)
  taskItem.innerHTML= `Task: ${taskDescrip}` + "<br>" + `Priority: ${taskPriority}`
  console.log(newTaskDescrip)

  newTaskDescrip.value = ""
  newTaskPriority.value = ""
}

newTaskForm.addEventListener("submit", handleNewTask)
