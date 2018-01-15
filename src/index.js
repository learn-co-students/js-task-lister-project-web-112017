document.addEventListener('DOMContentLoaded', () => {
  console.log("The DOM content has loaded");
  // your code here ....

  //Functions
  function handleAddList(e) {
    //prevent default form action
    e.preventDefault()
    // get text input
    let titleField = document.getElementsByTagName('input')[0].value

    if (titleField !== "") {
    //append to section id lists <div class = 'list'>
    let listsSection = document.getElementById('lists')
    //create node
    let newListElement = document.createElement('div')
    newListElement.className += 'list'

    //create h2 element to go in node && button
    let newH2 = document.createElement('h2')
    let newListObj = new List(titleField)
    newH2.innerHTML = `<button data-id= "${newListObj.id}" class="delete-list">X</button>${titleField}`
    let deleteButton = newH2.children[0]
    deleteButton.addEventListener('click', handleDeleteList)
    newListElement.appendChild(newH2)
    // append to section
    listsSection.appendChild(newListElement)
    //Reset form text
    newListTitleInput.innerText = ''
  }

  }
  // Add Event Listeners
  function handleDeleteList(e){
    e.preventDefault()
    debugger
    let listParent = e.target.parentNode.parentNode
    let listsSection = document.getElementById('lists')
    listsSection.removeChild(listParent)
  }

  let newListTitleInput = document.getElementsByTagName('input')[1]
  newListTitleInput.addEventListener('click', handleAddList)
});
