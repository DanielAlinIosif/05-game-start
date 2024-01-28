const start = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelectorAll('.time-list');
const board = document.querySelector('#board');
const timer = document.querySelector('#time');
let interval = null;

let time = 0;

start.addEventListener('click', (event) => {
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
    const size = getRandomNumber(10, 50);
    const {width, height} = board.getBoundingClientRect();
    const x = getRandomNumber(0, width - size);
    const y = getRandomNumber(0, height - size);
    circle.classList.add('circle')

    circle.style.width = '${size}px';
    circle.style.height = '${size}px';
    circle.style.top = '${y}}px';

    board.append(circle);
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + max);
}

// temporary
time = 10;
startGame();