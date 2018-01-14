/*
list is responsible for creating a single list component
*/
const List = (() => {
  let ListId = 1
  return class List {
    constructor(title) {
       this.id = ListId++
       this.title = title
       store.lists.push(this)

    }

  tasks(){
    return store.tasks.filter(task => task.listId === this.id)
  }

  static findByTitle(title){
    return store.lists.find(list => list.title === title)
  }


  }

})()
