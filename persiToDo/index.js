//We first need to show our items on the screen



//We load, save, render, add, and remove

let items = ["Hello World", "123"]

//As we are putting our items inside a div, we will access the div by using the following code
const itemsDiv = document.getElementById ("items")

function renderItems() {
    itemsDiv.innerHTML = null;

    //for loop: when we know number of items we want to iterate
    //while loop: when we do not know the number of times we want to iterate

    for (const [idx, item] of Object.entries(items)) {
        //we will create some text we will put inside of the div to hold the input

        const text = document.createElement("p")
        
        //set the content
        text.textContent = item;

        //Add it to the div

        itemsDiv.appendChild(text)
    }
}

renderItems()

function loadItems() {}
function saveItems() {}
function addItems() {}
function removeItems() {}