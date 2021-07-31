//armazenar no localstorage a data escolhida para pegar no contador...

let returnButton = document.getElementById('returnButton')
returnButton.addEventListener('click',function(){
    localStorage.setItem('year','');
    localStorage.setItem('month','');
    localStorage.setItem('day','');
    location.replace('./inicio.html')
});

let anima;
let year = localStorage.year;
let month = localStorage.month;
let day = localStorage.day;
let dateTarget = new Date(`${year}/${month}/${day}`)

window.addEventListener('load', load);

let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth()+1;
let currentDay = new Date().getDate();

function load(){
    let totalTime = ((dateTarget - new Date())/(1000*60*60*24));
    let days = Math.floor(totalTime);
    let hours = Math.floor((totalTime%1) * 24);
    let minutes = Math.floor((totalTime * 24)%1*60);
    let seconds = Math.floor(((totalTime * 24)%1*60)%1*60);
    let dayTx = document.getElementById('days').innerHTML = days;
    let hourTx = document.getElementById('hours').innerHTML = hours;
    let minTx = document.getElementById('mins').innerHTML = minutes;
    let secTx = document.getElementById('secs').innerHTML = seconds;
    requestAnimationFrame(load);
}
