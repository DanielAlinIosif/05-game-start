const start = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelectorAll('.time-list');
const board = document.querySelector('#board');
const timer = document.querySelector('#time');
let interval = null;

let time = 0;

start.addEventListener('click', () => {
    screens[0].classList.add('up')
});

timeList.addEventListener('click', (event) => {
    if(event.target.classList.contains('time-btn')){
        time = parseInt(event.target.getAttribute('data-time'));
        screens[1].classList.add('up');
        startGame();
    }  
});

function startGame() {
    interval = setInterval(decreaseTime, 1000);
    createRandomCircle();
    setTimer(time)
}

function finishGame() {

}

function decreaseTime() {
    if(time === 0) {
        finishGame();
    } else {
        --time;
        setTimer(time)
    }
}

function setTimer(value) {
    if(value < 10) {
        timer.innerHTML = '00:0${value}';
    } else {
        timer.innerHTML = '00:${time}';
    }
}


function createRandomCircle() {
    const circle = document.createElement('div');
    circle.classList.add('circle')
    circle.style.width = "16px";
    circle.style.height = "16px";

    board.append(circle);
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + max);
}

// temporary
time = 10;
startGame();