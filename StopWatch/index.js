//We will keep track of the number of seconds that have elapsed




let secondsElapsed = 0;

let interval = null; //it will be changed later

const time = document.getElementById ("time")

//We will describe a function to update the timer when clicked
//setTime function will be responsible for telling us how many seconds has elapsed

function setTime () {

    //We want to adjust the seconds and mins 

    //take number of secs and divide them by 60

    const minutes = Math.floor(secondsElapsed / 60)
    const seconds = secondsElapsed % 60
    
    
    time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}`;
}

//We will further pad the values as if they are not two digit values, start with two digit number
// then we add a leading 0 with a padStart method

function padStart(value) {
    return String(value).padStart(2, "0")
} 


//function timer to increment the time when the start button is hit
//this is passed into the interval variable 
function timer () {
    secondsElapsed ++;

    //call the setTime function after incrementing the seconds
    setTime()
}


function startClock(){
    //to start the clock we need to create an interval
    //Something that can run for any predefined period of time
    //Like every seconds, mins, hour

    if (interval) resetClock()
    interval = setInterval(timer, 1000)
}

function resumeClock() {
    if(interval) stopClock()
    interval = setInterval(timer, 1000)
}


function stopClock() {
    clearInterval (interval)
}

function resetClock() {
    stopClock()
    secondsElapsed = 0
    setTime()
}