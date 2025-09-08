let light = document.getElementsByClassName("light")[0];
let interval;
let currentState = "green";
const transitions = {
    green: "yellow",
    yellow: "red",
    red: "green"
};
startTimer();
render();

function startTimer(){
    clearInterval(interval);
    interval = setInterval(changeState, 5000);
};

function changeState(){
    currentState = transitions[currentState];
    render();
}

function render(){
    light.classList.remove("green", "yellow", "red");
    light.classList.add(currentState);
    console.log("current state: ", currentState);
}
function stopTimer(){
    clearInterval(interval);
}
