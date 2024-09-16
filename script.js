let timer;
let elapsedTime = 0;
let isRunning = false;
const display = document.getElementById('display');
const lapTimes = document.getElementById('lap-times');

document.getElementById('start').addEventListener('click', startStopwatch);
document.getElementById('pause').addEventListener('click', pauseStopwatch);
document.getElementById('reset').addEventListener('click', resetStopwatch);
document.getElementById('lap').addEventListener('click', recordLap);

function startStopwatch() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(updateDisplay, 10);
    }
}

function pauseStopwatch() {
    isRunning = false;
    clearInterval(timer);
}

function resetStopwatch() {
    isRunning = false;
    clearInterval(timer);
    elapsedTime = 0;
    display.textContent = formatTime(elapsedTime);
    lapTimes.innerHTML = '';
}

function recordLap() {
    if (isRunning) {
        const lapTime = formatTime(elapsedTime);
        const li = document.createElement('li');
        li.textContent = lapTime;
        lapTimes.appendChild(li);
    }
}

function updateDisplay() {
    elapsedTime += 10;
    display.textContent = formatTime(elapsedTime);
}

function formatTime(time) {
    const milliseconds = Math.floor(time % 1000 / 10);
    const seconds = Math.floor(time / 1000 % 60);
    const minutes = Math.floor(time / 60000 % 60);
    const hours = Math.floor(time / 3600000);
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(2, '0')}`;
}
