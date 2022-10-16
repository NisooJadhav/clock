document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundAttachment = "fixed";

function getRandomRng() {
  return Math.floor(Math.random() * 1000) + 0;
}

getRandomImage(getRandomRng());

function getRandomImage(randomRng) {
  document.body.style.backgroundImage = `linear-gradient(to bottom, #00000099,#00000099),url('https://picsum.photos/seed/${randomRng}/1920/1080')`;
}

// CLOCK
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
  getRandomImage(getRandomRng());
});
setInterval(clock, 1000);

// DATE
var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = today.toLocaleString("default", { month: "short" });
var yyyy = today.getFullYear().toString().substr(-2);

today = dd + " " + mm + " " + yyyy;
document.querySelector(".day").innerHTML = today;

// QUOTE
// API -> https://github.com/lukePeavey/quotable
const quote = document.querySelector("q");
const cite = document.querySelector("cite");

getQuote();

async function getQuote() {
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

// JOKE
// API -> https://icanhazdadjoke.com/
const url = "https://icanhazdadjoke.com/";
const joke = document.querySelector(".joke");

const getJoke = async () => {
  joke.innerText = "loading...";
  try {
    const res = await fetch(url, {
      headers: {
        Accept: "application/json",
      },
    });
    if (!res.ok) {
      throw new Error("error");
    }
    const data = await res.json();
    joke.innerHTML = data.joke;
  } catch (e) {
    console.error(e.message);
    joke.innerHTML = "an error occured while fetching joke :(";
  }
};
getJoke();

// NEWS
const news = document.querySelector(".news");
getNews();

async function getNews() {
  const response = await fetch(
    "https://saurav.tech/NewsAPI/everything/cnn.json"
  );
  const data = await response.json();
  if (response.ok) {
    function randomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    let ran1 = randomInt(1, 90);
    for (let i = ran1; i < ran1 + 10; i++) {
      document.querySelector(".news-box").innerHTML +=
        "<img src=" +
        data.articles[i].urlToImage +
        " loading='lazy'/>" +
        "<h1>" +
        data.articles[i].title +
        "</h1>" +
        "<a href=" +
        data.articles[i].url +
        " target='_blank'>read full news here: " +
        "<b>" +
        data.articles[i].author +
        " </b>" +
        "</a>" +
        "<p>" +
        data.articles[i].description +
        "</p>" +
        "<hr />";
    }
  } else {
    news.textContent = "an error occured while fetching news :(";
    console.log(data);
  }
}

// FACTS
function getFacts() {
  let a = new XMLHttpRequest();
  if (a)
    a.onreadystatechange = function () {
      function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
      if (this.readyState == 4 && this.status == 200) {
        const response = JSON.parse(a.responseText);

        function count(obj) {
          return Object.keys(obj).length;
        }

        let fact1 = randomInt(1, count(response) - 2);
        let fact2 = fact1 + 1;
        let fact3 = fact2 + 1;

        let facts = document.querySelector(".facts");
        document.querySelector(".facts").innerHTML += response[fact1];
        document.querySelector(".facts").innerHTML += "<br>";
        document.querySelector(".facts").innerHTML += "<br>";
        document.querySelector(".facts").innerHTML += response[fact2];
        document.querySelector(".facts").innerHTML += "<br>";
        document.querySelector(".facts").innerHTML += "<br>";
        document.querySelector(".facts").innerHTML += response[fact3];
      }
    };
  a.open("GET", "db.json", true);
  a.send();
}

getFacts();

// TIMER
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
  btnClock.classList.remove("hidden");
  btnTimer.classList.add("hidden");
  news.classList.add("hidden");
  newsHub.classList.add("hidden");
});
btnClock.addEventListener("click", function () {
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

// RELOAD
document.querySelector(".reload").addEventListener("click", function () {
  document.querySelector(".news-box").innerHTML = "";
  document.querySelector(".facts").innerHTML = "";
  getNews();
  getQuote();
  getJoke();
  getFacts();
});

// GitHub Repo Redirect
document.querySelector(".github").addEventListener("click", function () {
  location.href = "https://github.com/nisoojadhav/clock";
});
