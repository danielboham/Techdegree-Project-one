/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

var listIndex;
var quoteObject;
var quoteContent;
var randomText;

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
    randomText = '';
    randomText += '<p class="quote">' + quoteContent.quote + '</p>';
    randomText += '<p class="source">' + quoteContent.source;
    if (quoteContent.citation) {
        randomText += '<span class="citation">' + quoteContent.citation + '</span>';
    }
    if (quoteContent.year) {
        randomText += '<span class="citation">' + quoteContent.year + '</span>';
    }
    randomText += '</p>';
    document.getElementById('quote-box').innerHTML = randomText;
}


document.getElementById('loadQuote').addEventListener("click", printQuote, false);
