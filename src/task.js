/*
task is responsible for creating a single task object
*/
const Task = (() => {
  let id = 1
  return class Task {
    constructor(description, priority) {
      //your code here
      if (description) {
        this.description = description
      } else {
        throw "Description cannot be blank."
      }

      if (priority) {
        this.priority = priority
      } else {
        this.priority = "low"
      }

      this.id = id++
    }

    makeTask() {
      let newTaskDescription = document.getElementById('new-task-description').value
      let newTaskPriority = document.getElementById('new-task-priority').value
      let parentListInput = document.getElementById('parent-list').value

      let newLi = document.createElement('li')
      newLi.innerHTML = `Task: ${this.description} <br> Priority: ${this.priority}`
      newLi.setAttribute('data-id', this.id)

      const items = [...document.querySelector("#parent-list").children]

      parentListInput.append(newLi)
    }
  }



})()
