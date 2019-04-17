/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  x Create the array of quote objects and name it `quotes`.
  x Add at least five quote objects to the `quotes` array.
  x Give each quote object a `quote` and `source` property.
  x Add the `citation` property to at least one object in the array.
  x Add the `year` property to at least one object in the array.
  x Use console.log() to log your array of quotes to the console.
***/




/***
  Create the `getRandomQuote` function to:
   x Create a variable to store a random number
   x Use the random number to `return` a random quote object from the `quotes` array.
***/




/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/




/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

var listIndex;
var quoteObject;
var quoteContent;
var html;

var quotes = [
    {
        quote: 'Get busy living or get busy dying.',
        source: 'Stephen King',
        citation: 'Book',
        year: 1982
    },
    {
        quote: 'Twenty years from now you will be more disappointed by the things that you did not do than by the ones you did do.',
        source: 'Marc Twain',
        citation: 'New York Times',
        year: 1901
    },
    {
        quote: 'Great minds discuss ideas; average minds discuss events; small minds discuss people.',
        source: 'Eleanor Roosevelt',
        citation: 'Speech',
        year: 1945
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
        citation: 'Speech',
        year: 1910
    }
];



//console.log(quotes);

// function that creates a random number for the index value
function getRandomQuote() {
    listIndex = Math.floor(Math.random() * quotes.length);
    quoteObject = quotes[listIndex];
    return quoteObject;
}

//console.log(getRandomQuote());

//function to print the quote
function printQuote() {
    quoteContent = getRandomQuote();
    html = '';
    html += '<p class="quote">' + quoteContent.quote + '</p>';
    html += '<p class="source">' + quoteContent.source;
    html += '<span class="citation">' + quoteContent.citation + '</span>';
    html += '<span class="year">' + quoteContent.year + '</span>';
    html += '</p>';
    document.getElementById('quote-box').innerHTML = html;
    return html;
}


//console.log(printQuote());


document.getElementById('loadQuote').addEventListener("click", printQuote, false);
