let display = document.querySelector("#display");
let startBtn = document.querySelector("#startBtn");
let stopBtn = document.querySelector("#stopBtn");
let resetBtn = document.querySelector("#resetBtn");

let timer = null;
let seconds = 0;
let minutes = 0;
let hours = 0;

function updateDisplay() {
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    display.innerHTML = `${h}:${m}:${s}`;
}

function startTimer() {
    if (timer !== null) return;

    timer = setInterval(() => {
        seconds++;

        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }

        updateDisplay();
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
    timer = null;
}

function resetTimer() {
    clearInterval(timer);
    timer = null;
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
