var toggleSecs = true;

document.getElementsByClassName("content").onclick = function () {
  toggleSeconds();
};

function toggleSeconds() {
  if (toggleSecs == true) {
    toggleSecs = false;
  } else {
    toggleSecs = true;
  }
  displayContent();
}

function displayContent() {
  showTime();
  showGreeting();
}

function showTime() {
  const today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  hours = addZeroes(hours);
  minutes = addZeroes(minutes);
  seconds = addZeroes(seconds);
  if (toggleSecs == true) {
    document.getElementById("clock").innerHTML =
      hours + ":" + minutes + ":" + seconds;
  } else {
    document.getElementById("clock").innerHTML = hours + ":" + minutes;
  }
  setTimeout(showTime, 1000);
}

function addZeroes(number) {
  if (number < 10) {
    number = "0" + number;
  }
  return number;
}

function showGreeting() {
  const today = new Date();
  let hours = today.getHours();
  document.getElementById("greeting").innerHTML =
    "Good " + getTimeOfDay(hours) + "!";
  setTimeout(showGreeting, 1000);
}

function getTimeOfDay(hours) {
  let timeOfDay = "";
  if ((hours < 6 && hours >= 0) || (hours < 24 && hours >= 22)) {
    timeOfDay = "night";
  }
  if (hours < 10 && hours >= 6) {
    timeOfDay = "morning";
  }
  if (hours < 19 && hours >= 10) {
    timeOfDay = "day";
  }
  if (hours < 22 && hours >= 19) {
    timeOfDay = "evening";
  }
  return timeOfDay;
}
