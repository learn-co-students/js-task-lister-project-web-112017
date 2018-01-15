document.addEventListener('DOMContentLoaded', () => {
  console.log("The DOM content has loaded");
  // your code here ....

  let taskForm = document.getElementById('create-task-form')
  taskForm.style.display = 'none'
  let listForm = document.getElementById('create-list-form')

//EVENT LISTENERS
  listForm.addEventListener('submit', function(e) {
    e.preventDefault()

    let newListTitle = document.getElementById('new-list-title').value

    let newList = new List(newListTitle)

    newList.makeList()

    if (taskForm.style.display === "none") {
        taskForm.style.display = "block";
    }

    listForm.reset()
  })

  taskForm.addEventListener('submit', function(e) {
    e.preventDefault()

    let newTaskDescription = document.getElementById('new-task-description').value
    let newTaskPriority = document.getElementById('new-task-priority').value

    let newTask = new Task(newTaskDescription, newTaskPriority)

    newTask.makeTask()

    taskForm.reset()

  })


});
