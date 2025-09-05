let rollBtn = document.getElementById("roll");
let dice1 = document.getElementById("dice1");
let dice2 = document.getElementById("dice2");
let resultDisplay = document.getElementById("result");
let resetBtn = document.getElementById("reset");
let historyListElement = document.getElementById("history");
let historyData = [];
//--------------
//Main functions
//--------------
rollBtn.addEventListener("click", (event)=>{

    let computerDice1 = Math.floor(Math.random()*6) + 1;
    let computerDice2 = Math.floor(Math.random()*6) + 1;
    let result = computerDice1 + computerDice2;

    console.log(computerDice1, computerDice2, result);
    showResult({computerDice1, computerDice2, result});

})

resetBtn.addEventListener("click", (event)=>{
    historyData = [];
    historyListElement.textContent="History reset";
    saveHistory();
})
//----------------
//Helper functions
//----------------

function showResult({computerDice1, computerDice2, result}){
    renderHistory({computerDice1, computerDice2, result});
    historyData.push({computerDice1, computerDice2, result});
    saveHistory();
    dice1.textContent=computerDice1;
    dice2.textContent=computerDice2;
    resultDisplay.textContent = result;
}
function saveHistory(){
  localStorage.setItem("rolls", JSON.stringify(historyData));
}
function renderHistory({computerDice1, computerDice2, result}){
let li = document.createElement("li")
li.textContent = `Dice 1: ${computerDice1} Dice 2: ${computerDice2} and total: ${result}`;
historyListElement.prepend(li)
}
function loadHistory() {
  const saved = localStorage.getItem("rolls");
  
  if (saved) {
    historyData = JSON.parse(saved);
    
    historyData.forEach((roll) => renderHistory(roll));
  }
}

window.addEventListener("load", loadHistory);