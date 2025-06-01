let [seconds, minutes, hours] = [0, 0, 0];
let display = document.getElementById("display");
let lapsContainer = document.getElementById("laps");
let timer = null;
let lapCount = 0;

function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  display.innerText = `${h}:${m}:${s}`;
}

function stopwatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  updateDisplay();
}

function start() {
  if (timer !== null) return;
  timer = setInterval(stopwatch, 1000);
}

function pause() {
  clearInterval(timer);
  timer = null;
}

function reset() {
  pause();
  [seconds, minutes, hours] = [0, 0, 0];
  lapCount = 0;
  updateDisplay();
  lapsContainer.innerHTML = "";
}

function recordLap() {
  lapCount++;
  const li = document.createElement("li");
  li.textContent = `Lap ${lapCount}: ${display.innerText}`;
  lapsContainer.appendChild(li);
}

function clearLaps() {
  lapsContainer.innerHTML = "";
  lapCount = 0;
}
