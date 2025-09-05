let seconds = 0;
let tens = 0;
let secondsDisplay = document.getElementById("seconds");
let tensDisplay = document.getElementById("tens");
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");
let historyDisplay = document.getElementById("history");
let resetHistoryBtn = document.getElementById("resethistory");
let interval;
let history = [];

startBtn.addEventListener("click", (event) => {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
});

function startTimer() {
  tens++;
  if (tens > 99) {
    seconds++;
    tens = 0;
  }
  secondsDisplay.textContent = format(seconds);
  tensDisplay.textContent = format(tens);
}

stopBtn.addEventListener("click", (event) => {
  clearInterval(interval);
  writeHistory();
});

function writeHistory() {
  const time = format(seconds) + ":" + format(tens);
  renderHistory(time);
  history.push(time);  
  saveHistory();        
}
function format(num) {
  return num < 10 ? "0" + num : num;
}

function saveHistory() {
  localStorage.setItem("times", JSON.stringify(history));
}

resetBtn.addEventListener("click", (event) => {
  clearInterval(interval);
  tensDisplay.textContent = "00";
  tens = 0;
  secondsDisplay.textContent = "00";
  seconds = 0;
});

resetHistoryBtn.addEventListener("click", () => {
  history = [];
  historyDisplay.textContent = "";
  saveHistory(); 
});

function loadHistory() {
  const saved = localStorage.getItem("times");
  if (saved) {
    history = JSON.parse(saved);
    history.forEach((time) => renderHistory(time));
  }
}

function renderHistory(time) {
  let li = document.createElement("li");
  li.textContent = time;
  historyDisplay.prepend(li);
}

window.addEventListener("load", loadHistory);