const images = [
    "photos/1.jpg",
    "photos/2.jpg",
    "photos/3.jpg",
    "photos/4.jpg",
    "photos/5.jpg"
]

let image = 0;

const imageElement = document.getElementsByClassName("hero-image");

setInterval(() => {
    image = (image + 1) % images.length;
    imageElement[0].src = images[image];
}, 4000);

const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const milms = document.getElementById("ms");

const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const edit = document.getElementById("edit");

let started = false;
let currentInterval = null;

function startTimer() {
    let ms = milms.innerText;
    let sec = seconds.innerHTML;
    let min = minutes.innerHTML;

    currentInterval = setInterval(() => {
        ms--;
        if (ms < 0) {
            sec--;
            ms = 99;
            if (sec < 0) {
                min--;
                sec = 59;
            }

            if (min < 0) {
                min = 0;
                sec = 0;
                ms = 0;
                clearInterval();
                alert("Time's up!");
                stopTimer();
            }
        }

        minutes.innerText = min;
        seconds.innerText = sec;
        milms.innerText = ms;
    }, 10);

    started = true;
}

function stopTimer() {
    clearInterval(currentInterval);
    started = false;
}

function resetTimer() {
    stopTimer();
    minutes.innerText = "00";
    seconds.innerText = "00";
    milms.innerText = "00";
}

function editTimer() {
    if (started) {
        if (confirm("Are you sure you want to stop the timer?")) {
            stopTimer();
        } else {
            return;
        }
    }

    const newMinutes = prompt("Enter new minutes");
    const newSeconds = prompt("Enter new seconds");
    const newMillis = prompt("Enter new millis");

    minutes.innerText = newMinutes;
    seconds.innerText = newSeconds;
    milms.innerText = newMillis;
}

start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);
edit.addEventListener("click", editTimer);