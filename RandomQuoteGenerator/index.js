//declare a variable const for quotes

const quotes = [ 

"It does not matter how slowly you go as long as you do not stop. — Confucius",  

"Success is not final, failure is not fatal: it is the courage to continue that counts. — Winston Churchill",

"A river cuts through rock, not because of its power, but because of its persistence. — James N. Watkins ", 

"Courage doesn’t always roar. Sometimes courage is the quiet voice at the end of the day saying, ‘I will try again tomorrow.’ ",   

"Many of life’s failures are people who did not realize how close they were to success when they gave up. ",

"Great works are performed not by strength, but by perseverance. ",

"It always seems impossible until it’s done. — Nelson Mandela  ",

"Character consists of what you do on the third and fourth tries. ",   

"You may have to fight a battle more than once to win it. — Margaret Thatcher",

"Perseverance is not a long race; it is many short races one after the other. — Walter Elliot",
]


//we will use a set (new instance of the setClass) using a new keyword
const usedIndexes = new Set()

//We want to populate the paragraph tag with the quotes
//We have access to the paragraph

const quoteElement = document.getElementById ("Quote")

function generateQuote() {


    //We will add a new condition checker to monitor when the set is filled to clear

    if(usedIndexes.size >= quotes.length) {
        usedIndexes.clear()
    }

    while (true) {
        
        //we want to set what is the quote on the page

        const randomIdx = Math.floor(Math.random() * quotes.length)

        //We will check if the used values has the random index it is going to generate

        if (usedIndexes.has(randomIdx)) continue
        
        //We are going to use randomIdx and plug into quote to access the quotes
        const quote = quotes [randomIdx]
        
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIdx)
        break
    
    }
}





