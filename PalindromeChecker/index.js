//For us to check if the letter is a palindrome we need to check for what the user have input
//or actually getting what the user has already typed in
//Declare a constant variable that is not going to change

const input = document.getElementById("input")


function reverseString (str){
    //create a reverse function string
    //take a string and convert it into an array
    //take our string convert it into array, and take the arrays and convert into string

    return str.split("").reverse().join("")
}

function check(){
    const value = input.value
    const reverse = reverseString(value)
    
    if(value === reverse){
        alert("P A L I N D R O N E")
    }else{
        alert("Not today")
    }

    //clear the input value
    input.value = ""
}
