document.addEventListener('DOMContentLoaded', () => {
  console.log("The DOM content has loaded");
  // your code here ....

  //Functions
  function handleAddList(e){
    //prevent default form action
    e.preventDefault()

    // get text input
    let titleField = document.getElementsByTagName('input')[0].value
    //append to section id lists <div class = 'list'>
    let listsSection = document.getElementById('lists')

    //create node
    let newListElement = document.createElement('div')
    newListElement.className += 'list'
    debugger
    //create h2 element to go in node && button
    let newH2 = document.createElement('h2')
    newH2.innerHTML = `<button data-id="1" class="delete-list">X</button>${titleField}`
    newListElement.appendChild(newH2)

    // append to section
    listsSection.appendChild(newListElement)

    //Reset form text
    newListTitleInput.innerText = ''
  }
  // Add Event Listeners
  let newListTitleInput = document.getElementsByTagName('input')[1]
  newListTitleInput.addEventListener('click', handleAddList)

  // function to create a new list instance and append to dom.

  //function to delete a new list instance and remove from dom?


});
