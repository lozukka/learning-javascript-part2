let resultTable = document.getElementById("resulttable");
let warningMessage = document.getElementById("warning");
let submitBtn = document.getElementById("submit");

const rates = {
  USD: 1.08,   // Yhdysvaltain dollari
  GBP: 0.86,   // Englannin punta
  JPY: 158.5,  // Japanin jeni
  SEK: 11.25   // Ruotsin kruunu
};

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    let userInput = document.getElementById("userinput").value;
    if(validateUserInput(userInput)){
        renderResults(userInput);
    }else {
        warningMessage.textContent = `Use a positive number, thank you!`;
    }
    
});

function validateUserInput(userInput){
    return !isNaN(userInput) && userInput > 0;
}
function renderResults(userInput){
    let tr = document.createElement("tr");
    for(const [currency, rate] of Object.entries(rates)){
        let td = document.createElement("td");
        let result = userInput * rate;
        td.textContent = `${result.toFixed(2)}`
        tr.appendChild(td);
    };
    resultTable.appendChild(tr);
}
