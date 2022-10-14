const inputType = document.querySelector(".input-type");

const randomRng = Math.floor(Math.random() * 1000) + 0;
document.body.style.cssText = `background: linear-gradient(to bottom, #00000050,transparent,#00000099),url(https://picsum.photos/seed/${randomRng}/1920/1080)`;

// bgSwitch(bgImg), 1000;

//CLOCK
let is24h = false;
function clock() {
  const d = new Date();
  let h = d.getHours().toString().padStart(2, "0");
  let m = d.getMinutes().toString().padStart(2, "0");
  let s = d.getSeconds().toString().padStart(2, "0");
  let session = "";
  if (!is24h) {
    if (h >= 12) {
      h = (h - 12).toString().padStart(2, "0");
      session = "PM";
    } else {
      session = "AM";
    }
  }
  document.querySelector("time").innerHTML = h + ":" + m + ":" + s;
  document.querySelector(".ampm").innerHTML = session;
}
document.querySelector(".clock").addEventListener("click", function () {
  is24h = !is24h;
});
setInterval(clock, 1000);

// Quotes
const quote = document.querySelector("q");
const cite = document.querySelector("cite");

updateQuote();

// API -> https://github.com/lukePeavey/quotable
async function updateQuote() {
  const response = await fetch("https://api.quotable.io/random");
  const data = await response.json();
  if (response.ok) {
    // Update DOM elements
    quote.innerText = data.content;
    cite.textContent = "~ " + data.author + " ~";
  } else {
    quote.textContent = "An error occured";
    console.log(data);
  }
}

const news = document.querySelector(".news");
const newsHub = document.querySelector(".news-hub");
const getNews = async function () {
  try {
    const res = await fetch(
      `https://saurav.tech/NewsAPI/everything/cnn.json`
    );
    const data = await res.json();
    console.log(data);
    const random = Math.round(Math.random() * 9);
    if (res.ok) {
      news.textContent = data.articles[random].title;
    }
  } catch (err) {
    news.textContent = `Failure retrieving news data`;
  }
};
getNews();

// Timer
const btnTimer = document.querySelector(".timer-button");
const btnClock = document.querySelector(".clock-button");
const divClock = document.querySelector(".clock");
const divQuote = document.querySelector(".quote");
const divTimerDisplay = document.querySelector(".timer-display");
btnTimer.addEventListener("click", function () {
  // ask for permission to send notification
  Notification.requestPermission().then((perm) => {
    isNotificationAllowed = perm === "granted";
  });
  divClock.classList.add("hidden");
  divQuote.classList.add("hidden");
  divTimerDisplay.classList.remove("hidden");
  document.body.style.backgroundImage = "url(timer.jpg)";
  btnClock.classList.remove("hidden");
  btnTimer.classList.add("hidden");
  news.classList.add("hidden");
  newsHub.classList.add("hidden");
});
btnClock.addEventListener("click", function () {
  document.body.style.cssText = `background: linear-gradient(to bottom, #00000050,transparent,#00000099),url(https://picsum.photos/seed/${randomRng}/1920/1080)`;
  divClock.classList.remove("hidden");
  divQuote.classList.remove("hidden");
  divTimerDisplay.classList.add("hidden");
  btnClock.classList.add("hidden");
  btnTimer.classList.remove("hidden");
  news.classList.remove("hidden");
  newsHub.classList.remove("hidden");
});

let inputHour = 0;
let inputMin = 0;
let inputSec = 0;
let time = 0; //Time is seconds.
let isNotificationAllowed = false; // If notification is allowed.
const btnInputHour = document.querySelector(".input-hour");
btnInputHour.addEventListener("change", function (event) {
  if (event.target.value === "1") {
    document.querySelector(".displayhour").innerHTML = "hour";
  }

  inputHour = Number(event.target.value);
  time = time + inputHour * 3600;
});
const btnInputMin = document.querySelector(".input-min");
btnInputMin.addEventListener("change", function (event) {
  inputMin = Number(event.target.value);
  time = time + inputMin * 60;
});
const btnInputSec = document.querySelector(".input-sec");
btnInputSec.addEventListener("change", function (event) {
  inputSec = Number(event.target.value);
  time = time + inputSec;
});

let timer;
const timerContainer = document.querySelector(".timer-container");
const timerContainerCountdown = document.querySelector(
  ".timer-container__countdown"
);
// Creating executable function
const timerFunc = function () {
  const hour = String(Math.trunc(time / 3600)).padStart(2, "0");
  const min = String(Math.trunc((time / 60) % 60)).padStart(2, "0");
  const sec = String(Math.trunc(time % 60)).padStart(2, "0");
  // Displaying the timer
  timerContainerCountdown.innerText = `${hour}:${min}:${sec}`;

  // Stopping the timer when it is 0 seconds.
  if (time === 0) {
    // Show notification
    if (isNotificationAllowed)
      new Notification("Timer", { body: "Time is up!", icon: "/clock.png" });
    clearInterval(timer);
    btnInputHour.value = 0;
    btnInputMin.value = 0;
    btnInputSec.value = 0;
    time = 0;
    btnStop.classList.add("hidden");
    btnStart.classList.remove("hidden");
    timerContainerCountdown.classList.add("hidden");
    timerContainer.classList.remove("hidden");
  }
  time--;
};

const btnStart = document.querySelector(".start");
const btnStop = document.querySelector(".stop");
btnStart.addEventListener("click", function () {
  if (time > 0) {
    timerFunc();
    timer = setInterval(timerFunc, 1000);
    btnStop.classList.remove("hidden");
    btnStart.classList.add("hidden");
    timerContainerCountdown.classList.remove("hidden");
    timerContainer.classList.add("hidden");
  }
});
const selecElement = document.querySelectorAll(".input");
btnStop.addEventListener("click", function () {
  clearInterval(timer);
  btnInputHour.value = 0;
  btnInputMin.value = 0;
  btnInputSec.value = 0;
  time = 0;
  btnStop.classList.add("hidden");
  btnStart.classList.remove("hidden");
  timerContainerCountdown.classList.add("hidden");
  timerContainer.classList.remove("hidden");
});

inputType.addEventListener("change", function (e) {
  if (inputType.value === "analog") {
    window.open("analog.html");
  }
});
