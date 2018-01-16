
class App {
  constructor() {
    this.lists = []
    this.init();
  }

  init() {
    // grab new list form elements
    this.createListForm = document.getElementById('create-list-form');
    this.newListTitle = document.getElementById('new-list-title');

    // grab new list form elements
    this.createTaskForm = document.getElementById('create-task-form');
    this.parentListDropdown = document.getElementById('parent-list');
    this.newTaskDescription = document.getElementById('new-task-description');
    this.newTaskPriority = document.getElementById('new-task-priority');
    this.listsSection = document.getElementById('lists');

    // create event listeners for buttons
    this.createListForm.addEventListener('submit', this.createNewList.bind(this)) // bind to 'this' instance of App
    this.createTaskForm.addEventListener('submit', this.createNewTask.bind(this)) // bind to 'this' instance of App
    this.listsSection.addEventListener('click', this.deleteList.bind(this)) // bind to 'this' instance of App
  }

  createNewList() {
    // event implicitly passed to handler by listener
    event.preventDefault()
    // creates new List object instance with title property set to input value of the field
    const newList = new List(this.newListTitle.value)
    // push new List object into App lists array
    this.lists.push(newList)
    // clear the list form input field
    event.target.reset()
    // rerender the app
    this.render()
  }

  createNewTask() {
    event.preventDefault()
    // find the selected option then grab the id stored as a dataset
    const parentId = this.parentListDropdown.options[this.parentListDropdown.selectedIndex].dataset.id

    /* this will be used to populate the correct list instance with tasks by matching
    the current parentId (list dropdown) with its associated id in App's lists array */
    // coerce string value of parentId to be compared against int value of list.id using == operator
    const parentList = this.lists.find(list => list.id == parentId)
    // create a new Task object instance with properties set from form fields
    const newTask = new Task(this.newTaskDescription.value, this.newTaskPriority.value)
    //.push() that onto the correct list
    parentList.tasks.push(newTask)
    // clear the task form input fields
    event.target.reset()
    // re-render the app
    this.render()
  }

  deleteList() {
    if (event.target.className === "delete-list") {
      const listId = parseInt(event.target.dataset.id)
      this.lists = this.lists.filter(list => list.id !== listId) //remove that list from this.lists
    }
    this.render() //update the page to reflect the changes made in memory
  }

  render() {
    this.lists.length === 0 ? this.createTaskForm.style.display = "none" : this.createTaskForm.style.display = "block" //hide the new task form if there are no lists to associate it with

    let listHTML = []
    let dropdownHTML = []

    this.lists.forEach(list => {
      listHTML.push(list.render())
      dropdownHTML.push(`<option data-id="${list.id}">${list.title}</option>`)
    })

    this.parentListDropdown.innerHTML = dropdownHTML.join("")
    this.listsSection.innerHTML = listHTML.join("")
    console.log(this)
  }

}
