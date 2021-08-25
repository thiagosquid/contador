const returnButton = document.getElementById('returnButton').addEventListener('click',function(){
    localStorage.setItem('year','');
    localStorage.setItem('month','');
    localStorage.setItem('day','');
    location.replace('./index.html');
});

const dateTarget = new Date(`${localStorage.year}/${localStorage.month}/${localStorage.day}`).getTime();

window.addEventListener('load', load);

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth() + 1;
const currentDay = new Date().getDate();

function load(){
    let totalTime = ((dateTarget - new Date())/(1000*60*60*24));
    let days = Math.floor(totalTime);
    let hours = Math.floor((totalTime%1) * 24);
    let minutes = Math.floor((totalTime * 24)%1*60);
    let seconds = Math.floor(((totalTime * 24)%1*60)%1*60);
    if(days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0){
        alert("Contagem concluída")
        location.replace("./index.html")
    }else{
        document.getElementById('days').innerHTML = days;
        document.getElementById('hours').innerHTML = hours;
        document.getElementById('mins').innerHTML = minutes;
        document.getElementById('secs').innerHTML = seconds;
        requestAnimationFrame(load);
    }
}
