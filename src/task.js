/*
task is responsible for creating a single task object
*/
const Task = (() => {
  let taskId = 1
  return class Task {
    constructor(description, priority, list = {}) {
      this.id = taskId++
      this.description = description
      this.priority = priority
      this.listId = list.id
      store.tasks.push(this)
    }
  }

})()
