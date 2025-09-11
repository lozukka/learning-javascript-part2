async function getQuote() {
    const {text, author} = await fetchQuote();
    renderQuote(text, author);
}

async function fetchQuote() {
    try {
        const response = await fetch('./quotes.json');
        if (!response.ok) throw new Error("Failed to load quotes");
        
        const data = await response.json();
        const index = Math.floor(Math.random() * data.quotes.length);
        return data.quotes[index];
    } catch (error) {
        console.error(error);
        return { text: "Could not load quote.", author: "" };
    }
}


function renderQuote(text, author){
    let quoteText = document.getElementById("quote-text");
    let quoteAuthor = document.getElementById("quote-author");
    quoteText.textContent = text;
    quoteAuthor.textContent = author;
}


