const start = document.querySelector('.start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelectorAll('.time-list');

let time = 0;

start.addEventListener('click', () => {
    screens[0].classList.add('up')
});

timeList.addEventListener('click', (event) => {
    if(event.target.classList.contains('time-btn')){
        time = parseInt(event.target.getAttribute('data-time'));
        screens[1].classList.add('up')
    }  
});