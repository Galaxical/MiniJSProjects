//Design a code that changes the background color to the color of the button clicked on the screen
//Write a code to access the background html components background color of it programmatically

const body = document.getElementsByTagName("body")[0]

//write a function to change the background when each button is clicked



function setColor (name){
    body.style.backgroundColor = name;
}

function randomColor(){
    const red = Math.round(Math.random () * 255)
    const green = Math.round(Math.random () * 255)
    const blue = Math.round(Math.random () * 255)

    const color = `rgb(${red}, ${green}, ${blue})`
    body.style.backgroundColor = color;
}