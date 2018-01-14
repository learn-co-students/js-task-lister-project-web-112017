/*
list is responsible for creating a single list component
*/
const List = (() => {
  let id = 1
  return class List {
    constructor(title) {
      this.id = id++;
      this.title = title;
      this.tasks = []
    }

  }

})()
