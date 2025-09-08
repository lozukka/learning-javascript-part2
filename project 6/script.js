console.log("hello")
let resultTable = document.getElementById("resulttable");

let submit = document.getElementById("submit");

const rates = {
  EUR: 1,      // Euro
  USD: 1.08,   // Yhdysvaltain dollari
  GBP: 0.86,   // Englannin punta
  JPY: 158.5,  // Japanin jeni
  SEK: 11.25   // Ruotsin kruunu
};

const select = document.getElementById("currency");

select.addEventListener("change", (event) => {
  const selectedCurrency = event.target.value;       // esim. "USD"
  const rate = rates[selectedCurrency];              // esim. 1.08
  console.log(`Valittu: ${selectedCurrency}, kerroin: ${rate}`);
});

/*
submit.addEventListener("click", (event)=>{
    event.preventDefault();
    let userInput = Number(document.getElementById("userinput").value);
    let selectedValue = document.getElementById("currency").value;
    
  const selectedCurrency = event.target.value;       // esim. "USD"
  const rate = rates[selectedCurrency];              // esim. 1.08
  console.log(`Valittu: ${selectedCurrency}, kerroin: ${rate}`);
    let result = userInput * rates.selectedValue;
    console.log(userInput, selectedValue, result);
})*/



