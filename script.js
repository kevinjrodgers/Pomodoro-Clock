let TwentyFiveTimer = 25;
let BreakTimer = 5;
let count = 0;
let seconds = 1500;
let pause = true;

const workButtonIncrease = document.getElementById("work-increase");
const workButtonDecrease = document.getElementById("work-decrease");
const breakButtonIncrease = document.getElementById("break-increase");
const breakButtonDecrease = document.getElementById("break-decrease");
const pauseButton = document.getElementById("pause-button");
const startButton = document.getElementById("start-button");
const displayTimer = document.getElementById("timer");

// start
startButton.addEventListener('click', () => {
    clearInterval(count);
    pause = !pause;
    if(!pause){
        count = setInterval(timer, 1000);
    }
})

// timer function
function timer() {
    // countdown
    seconds--;
    countdown();
    // when seconds reaches zero stop
    if(seconds < 0) {
        clearInterval(count);
        pause = !pause;
        count = setInterval(timer, 1000);
    }
}

// HTML Functions
function countdown() {
    let minutes = Math.floor(seconds / 60);
    let updateSeconds = Math.floor(seconds % 60);
    
    displayTimer.innerHTML = `${minutes}:${updateSeconds < 10 ? '0' : ""}${updateSeconds}`;
}