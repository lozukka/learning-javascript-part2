console.log("hello")
fetch('./quotes.json')
    .then((response) => response.json())
    .then((json) => console.log(json));