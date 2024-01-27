const start = document.querySelector('.start');
const screen = document.querySelectorAll('.screens');
const timeList = document.querySelectorAll('.time-list');

let time = 0;

start.addEventListener('click', () => {
    screen[0].classList.add('up')
});

timeList.addEventListener('click', (event) => {
    if(event.target.classList.contains('time-btn')){
        time = parseInt(event.target.getAttribute('data-time'));
        screen[1].classList.add('up')
    }  
});