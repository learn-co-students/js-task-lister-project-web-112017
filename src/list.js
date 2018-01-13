/*
list is responsible for creating a single list component
*/
const List = (() => {
  let id = 1
  return class List {
    constructor(title) {
      this.id = id++
      this.setTitle(title)
    }

    setTitle(title) {
      if(title) {
        this.title = title
      } else {
        this.title = `ToDo List ${this.id}`
      }
    }

    createHTML() {
      let button = document.createElement('button')
      button.className = "delete-list"
      button.innerText = "X"

      let listDiv = document.createElement('div')
      listDiv.className = "list"
      listDiv.setAttribute('id' , `list${this.id}`)

      let h2 = document.createElement('h2')
      h2.innerText = this.title
      h2.prepend(button)

      let option = document.createElement('option')
      option.value = this.title
      option.innerText = this.title
      option.setAttribute('id' , `option${this.id}`)

      let ul = document.createElement('ul')

      listDiv.append(h2)
      listDiv.append(ul)

      document.querySelector("#lists").append(listDiv)
      document.querySelector("#parent-list").append(option)
    }
  }


})()
