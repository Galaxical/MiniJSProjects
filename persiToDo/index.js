//We first need to show our items on the screen



//We load, save, render, add, and remove

let items = []

//As we are putting our items inside a div, we will access the div by using the following code
const itemsDiv = document.getElementById ("items")
const input = document.getElementById("itemInput")
const storageKey = "items";

function renderItems() {
    itemsDiv.innerHTML = null;

    //for loop: when we know number of items we want to iterate
    //while loop: when we do not know the number of times we want to iterate

    for (const [idx, item] of Object.entries(items)) {

        //We want to be able to create a container that stores an item with a button that says remove such that
        //Items is like <div><p>item<p/><button><button/><div/>
        //we will create the div programmatically to add the whole div as a child inside the itemsDiv
        
        //We will make a container to store all of the objects we will put on the screen
        const container = document.createElement("div")
        container.style.marginBottom = "10px"

        //We make our text
        const text = document.createElement("p")

        text.style.display = "inline"
        text.style.marginRight = "10px"
        //set the content
        text.textContent = item;

        //we make our button
        const button = document.createElement("button")
        button.textContent = "Delete"

         //We will set the onclick for the button: this will call the removeItem functions and it removes the item from the list idx 
        //We call the onclick method pointing to removeItem function to remove items from the list idx
        //We will also use arrow function () => to wrap (wrapper syntax) the removeItem function to be executed automatically if not calle
        button.onclick = () => removeItems(idx)

        container.appendChild(text)
        container.appendChild(button)

        //Add it to the div

        itemsDiv.appendChild(container)
    }
}


function loadItems() {
    //we will get what has been stored as part of the storage key

    const oldItems = localStorage.getItem(storageKey)

    //then convert to an array that is outputable on JS

    if (oldItems) items = JSON.parse(oldItems) //parse will convert the str to a JS object said array
    renderItems()
}

function saveItems() {

    
    //We will take our array items[] and convert it to string before storing it as localStorage
    const stringItems = JSON.stringify(items);
    localStorage.setItem(storageKey, stringItems) //We are using storageKey to map strItems so as to keep up to date the dataType to be stored in the localStorage

}

function addItem() {

    //we will further get the value of the itemsInput
    const value = input.value;

    if(!value){
        alert ("You cannot add empty items")
        return //naked return
    }

    items.push(value)
    renderItems()
    input.value = ""
    saveItems()
}


function removeItems(idx) {
    //We use splice to remove elements at specific index
    items.splice(idx, 1)

    //We update the screen by rendering the items

    renderItems()

    saveItems()
}

document.addEventListener("DOMContentLoaded", loadItems)