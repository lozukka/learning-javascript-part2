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

startBtn.addEventListener("click", (event) => {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
});

function startTimer() {
  tens++;
  if (tens <= 9) {
    tensDisplay.innerHTML = "0" + tens;
  }
  if (tens > 9) {
    tensDisplay.innerHTML = tens;
  }
  if (tens > 99) {
    seconds++;
    secondsDisplay.innerHTML = "0" + seconds;
    tens = 0;
    tensDisplay.innerHTML = "0" + 0;
  }
  if (seconds > 9) {
    secondsDisplay.innerHTML = seconds;
  }
}

stopBtn.addEventListener("click", (event) => {
  let li = document.createElement("li");
  li.textContent =
    document.getElementById("seconds").textContent +
    ":" +
    document.getElementById("tens").textContent;
  historyDisplay.appendChild(li);

  clearInterval(interval);
});

resetBtn.addEventListener("click", (event) => {
  clearInterval(interval);
  tensDisplay.innerHTML = "00";
  tens = 0;
  secondsDisplay.innerHTML = "00";
  seconds = 0;
});

resetHistoryBtn.addEventListener("click", (event) => {
  historyDisplay.textContent = "";
});
