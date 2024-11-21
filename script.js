// create references to elements
const addToListBtn = document.querySelector("#addToListButton");
const listTextInput = document.querySelector("#listTextInput");
const myList = document.querySelector("#myList");

// add event listener to button
addToListBtn.addEventListener("click", addToList);
listTextInput.addEventListener("keypress", addToList);

function addToList(e){
    // check for enter key
    if(e.keyCode == 13 || e.target.textContent == "Add to List") {

    // function to react to the button
    // check text exists
    if (listTextInput.value) {
    // create a new li object
    const newListElement = document.createElement("li");

    // add event listener to delete item
    newListElement.addEventListener("click", removeFromList);

    // create new button
    // add event
    newListElement.innerHTML = listTextInput.value + " <button onclick='removeFromList'>Delete</button>";

    // clear text box
    listTextInput.value = "";

    // update the list
    myList.appendChild(newListElement);

    // focus on text box
    listTextInput.focus();
    }
}
}

// function to delete item
function removeFromList(e){
    // confirm we want to delete
    if(confirm("Are you sure you want to delete this item?")){
    // delete item
    const listItem = e.target.parentNode;
    listItem.parentNode.removeChild(listItem);
    
    // focus back on text box
    listTextInput.focus();
    }
}