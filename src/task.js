/*
task is responsible for creating a single task object
*/

const Task = (() => {
  let id = 1

  return class Task {
    constructor(description, priority) {
      if (!description) { throw new Error("Form description cannot be empty") } //all tasks must have a description

      this.id = id
      this.description = description
      this.priority = priority || "low" //if no priority is given, default to low
      id++
    }
    render() {
      return (
        `<li data-id="${this.id}">Task: ${this.description} <br> Priority: ${this.priority}</li>`
      )
    }
  }

})()
