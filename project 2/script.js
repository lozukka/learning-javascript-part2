let rollBtn = document.getElementById("roll");
let dice1 = document.getElementById("dice1");
let dice2 = document.getElementById("dice2");
let resultDisplay = document.getElementById("result");
let resetBtn = document.getElementById("reset");
let historyDisplay = document.getElementById("history");
let historyList = [];
//--------------
//Main functions
//--------------
rollBtn.addEventListener("click", (event)=>{

    //computer rolls two dices
    let computerDice1 = Math.floor(Math.random()*6) + 1;
    let computerDice2 = Math.floor(Math.random()*6) + 1;
    let result = computerDice1 + computerDice2;
    //count together
    //show result->save result
    console.log(computerDice1, computerDice2, result);
    showResult(computerDice1, computerDice2, result);
    
dice1.textContent=computerDice1;
dice2.textContent=computerDice2;
//totalResult.textContent="Hurray";
//history.textContent="very first roll";
})

resetBtn.addEventListener("click", (event)=>{
    historyList = [];
    historyDisplay.textContent="";
    saveHistory();
    //clear localstorage
    //clear display
})
//----------------
//Helper functions
//----------------

function showResult(computerDice1, computerDice2, result){
    renderHistory({computerDice1, computerDice2, result});
    historyList.push({computerDice1, computerDice2, result});
    saveHistory();
    resultDisplay.textContent = result;
}
function saveHistory(){
    localStorage.setItem("rolls", JSON.stringify(history));
}
function renderHistory(computerDice1, computerDice2, result){
let li = document.createElement("li")
li.textContent = `Dice 1: ${computerDice1} Dice 2: ${computerDice2} and total: ${result}`;
historyDisplay.prepend(li)
}
function loadHistory() {
  const saved = localStorage.getItem("rolls");
  if (saved) {
    history = JSON.parse(saved);
    history.forEach((roll) => renderHistory(computerDice1, computerDice2, result));
  }
}
//load history
window.addEventListener("load", loadHistory);