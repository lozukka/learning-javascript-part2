console.log("hello")

function getQuote(){
    let index = Math.floor(Math.random()*20)+1;
    console.log(index);
    let quote = fetchQuote(index);
    
}

function fetchQuote(index){
fetch('./quotes.json')
    .then((response) => response.json())
    .then((json) => console.log(json));
}
