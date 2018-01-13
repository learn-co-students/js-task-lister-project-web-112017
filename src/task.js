const Task = (() => {
  let id = 1
  return class Task {
    constructor(description, priority) {
      this.id = id++
      this.setDescription(description)
      this.setPriority(priority)
    }

    setPriority(priority) {
      if (priority) {
        this.priority = priority
      } else {
        this.priority = "low"
      }
    }

    setDescription(description) {
      if (description) {
        this.description = description
      } else {
        throw "Description Field Cannot Be Blank"
      }
    }

    createHTML() {
      let li = document.createElement('li')
      li.innerHTML = `Task: ${this.description} <br> Priority: ${this.priority}`
      const items = [...document.querySelector("#parent-list").children]
      const selectId = items.find((item) => item.selected).id.replace("option","list")
      document.querySelector(`[id="${selectId}"] ul`).append(li)
    }
  }

})()
