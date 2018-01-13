document.addEventListener('DOMContentLoaded', () => {

  function handleDelegatedDelete(ev) {
    if (ev.target.tagName === "BUTTON") {
      id = ev.target.parentNode.parentNode.id
      ev.target.parentNode.parentNode.remove()
      document.querySelector(`[id=option${id.replace("list","")}]`).remove()
    }
  }

  function handleListFormSubmit(ev) {
    ev.preventDefault();
    let title = document.querySelector("#new-list-title").value
    const list = new List(title)
    list.createHTML()
    document.querySelector("#new-list-title").value = ""
  }

  function handleTaskFormSubmit(ev) {
    ev.preventDefault();
    description = document.querySelector("#new-task-description").value
    priority = document.querySelector("#new-task-priority").value
    const task = new Task(description, priority)
    task.createHTML()
    document.querySelector("#new-task-description").value = ""
    document.querySelector("#new-task-priority").value = ""
  }

  document.getElementById("create-list-form").addEventListener("submit", handleListFormSubmit)
  document.getElementById("lists").addEventListener("click", handleDelegatedDelete)
  document.getElementById("create-task-form").addEventListener("submit", handleTaskFormSubmit)
});
