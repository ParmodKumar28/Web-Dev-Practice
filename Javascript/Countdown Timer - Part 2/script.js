//Write your javascript code here
let secondsSpan = document.getElementById("seconds");
let minutesSpan = document.getElementById("minutes");
let hoursSpan = document.getElementById("hours");
const startButton = document.getElementById("startButton");

let totalSeconds = 60;
let timerInterval;

function updateTimer() {
  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60;

  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");

  hoursSpan.textContent = hours + ":";
  minutesSpan.textContent = minutes + ":";
  secondsSpan.textContent = seconds;
}

startButton.addEventListener("click", function () {
  if (!timerInterval) {
    updateTimer();
    timerInterval = setInterval(function () {
      totalSeconds--;
      if (totalSeconds < 0) {
        clearInterval(timerInterval);
        timerInterval = null;
        // Optionally, add logic for when timer reaches zero
      } else {
        updateTimer();
      }
    }, 1000);
  }
});

resetButton.addEventListener("click", function () {
  totalSeconds = 60;
  updateTimer();
});
