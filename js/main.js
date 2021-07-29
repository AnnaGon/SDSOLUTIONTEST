var addBtn = document.querySelector('[value="Add"]');
var sortByName = document.querySelector('[value="Sort By Name"]');
var sortByValue = document.querySelector('[value="Sort By Value"]');

var messageForm = document.querySelector('#message-form');
var myList = document.getElementById('my-list');
var elementToEdit, 
isEditMode = false;

// ADD BUTTON FUNCTION
addBtn.onclick = addTodo;

function addTodo() {
    var textarea = document.getElementById('item');
    var todo = `<li>
   <span>${textarea.value}</span>
    </li>`;
    
    if (isEditMode) {
        elementToEdit.children[0].innerText = textarea.value;
        isEditMode = false;
    } else {
        myList.insertAdjacentHTML('beforeend', todo);
        console.log(myList);


    }
    textarea.value = '';
}


// DELETE BUTTON
function deleteBtn() {
    var elem = document.getElementById('my-list').lastChild;
    elem.parentNode.removeChild(elem);
}

// Validator

// SPLIT DATA
function splitName(){
}

// Sort by name

// Sort by value

