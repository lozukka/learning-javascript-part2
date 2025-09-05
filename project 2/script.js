let rollBtn = document.getElementById("roll");
let dice1 = document.getElementById("dice1");
let dice2 = document.getElementById("dice2");
let totalResult = document.getElementById("result");
let resetBtn = document.getElementById("reset");
let history = document.getElementById("history");
let historyList = [];

rollBtn.addEventListener("click", (event)=>{
dice1.textContent="2";
dice2.textContent="3";
totalResult.textContent="Hurray";
history.textContent="very first roll";
})