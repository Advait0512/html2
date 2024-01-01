let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let lapCounter = 1;

function start() {
  timer = setInterval(updateTime, 10);
}

function stop() {
  clearInterval(timer);
}

function reset() {
  clearInterval(timer);
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  lapCounter = 1;
  updateDisplay();
  clearLaps();
}

function lap() {
  const lapsList = document.getElementById('laps');
  const lapTime = `${padNumber(hours)}:${padNumber(minutes)}:${padNumber(seconds)}.${padNumber(Math.floor(milliseconds / 10))}`;
  const lapItem = document.createElement('li');
  lapItem.innerText = `Lap ${lapCounter}: ${lapTime}`;
  lapsList.appendChild(lapItem);
  lapCounter++;
}

function updateTime() {
  milliseconds += 10;

  if (milliseconds === 1000) {
    milliseconds = 0;
    seconds++;

    if (seconds === 60) {
      seconds = 0;
      minutes++;

      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }
  }

  updateDisplay();
}

function updateDisplay() {
  document.getElementById('hr').innerText = padNumber(hours);
  document.getElementById('min').innerText = padNumber(minutes);
  document.getElementById('sec').innerText = padNumber(seconds);
  document.getElementById('count').innerText = padNumber(Math.floor(milliseconds / 10));
}

function padNumber(number) {
  return number.toString().padStart(2, '0');
}

function clearLaps() {
  const lapsList = document.getElementById('laps');
  lapsList.innerHTML = '';
}
