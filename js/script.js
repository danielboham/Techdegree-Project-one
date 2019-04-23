/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

//Dear reviewer. Please review for 'Exceeds Expectations' grade BUT when the code isn't good enough a 'Meet Expectation' if fine for me.

//variables I used for this project
var listIndex;
var quoteObject;
var quoteContent;
var randomText;
var rgbcolor;


// the array which contains all quote objects
var quotes = [
    {
        quote: 'Get busy living or get busy dying.',
        source: 'Stephen King',
        citation: 'Book',
        year: 1982,
        tag: 'Business'
    },
    {
        quote: 'Twenty years from now you will be more disappointed by the things that you did not do than by the ones you did do.',
        source: 'Marc Twain',
        citation: 'New York Times',
        tag: 'Business'
    },
    {
        quote: 'Great minds discuss ideas; average minds discuss events; small minds discuss people.',
        source: 'Eleanor Roosevelt',
        citation: 'Speech',
        year: 1945,
        tag: 'Politics'
    },
    {
        quote: 'Those who dare to fail miserably can achieve greatly.',
        source: 'John F. Kennedy',
        citation: 'Interview',
        year: 1961
    },
    {
        quote: 'It is hard to fail, but it is worse never to have tried to succeed.',
        source: 'Theodore Roosevelt',
        year: 1910
    }
];

// to check if the array above works
console.log(quotes);

// A function that creates a random number for the index value
function getRandomQuote() {
    listIndex = Math.floor(Math.random() * quotes.length);
    quoteObject = quotes[listIndex];
    return quoteObject;
}

//console.log(getRandomQuote());

//function to print the quote and conditions to see if a property is available or not.
function printQuote() {
    quoteContent = getRandomQuote();
    randomText = '';
    randomText += '<p class="quote">' + quoteContent.quote + '</p>';
    randomText += '<p class="source">' + quoteContent.source;
    if (quoteContent.citation) {
        randomText += '<span class="citation">' + quoteContent.citation + '</span>';
    }
    if (quoteContent.year) {
        randomText += '<span class="citation">' + quoteContent.year + '</span>';
    }
    if (quoteContent.tag) {
        randomText += '<span class="tag">' + quoteContent.tag + '</span>';
    }
    randomText += '</p>';
    document.getElementById('quote-box').innerHTML = randomText;
}

//function that creates a random rgb value and uses this value in the id = "color" in HTML.
function rgbRandom(){
    var red =  Math.floor(Math.random() * 255);
    var green = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255);
    rgbcolor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    document.getElementById('color').style.backgroundColor = rgbcolor;
}

//console.log(rgbRandom());



// I found the code which uses mulitple functions in one setInterval here: https://stackoverflow.com/questions/23750152/multiple-functions-in-one-setinterval
setInterval(function () {
    printQuote();
    rgbRandom();
}, 20000);

// I have added another addEventListener for the rgbRandom so also with a click the background color changes.
document.getElementById('loadQuote').addEventListener("click", rgbRandom, false);
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

