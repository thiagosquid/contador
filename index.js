let dateTarget;
let day;
let month;
let year;
const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth()+1;
const currentDay = new Date().getDate()+1;
let dateNow;

if(currentMonth < 10){
    dateNow = `${currentYear}-0${currentMonth}-${currentDay}`;
}else{
    dateNow = `${currentYear}-${currentMonth}-${currentDay}`;
}
/*  Calendar min day for today   */
window.addEventListener('load', ()=>{
document.getElementById('dateInput').setAttribute('min',dateNow);
});
/*  Get user date target */
document.getElementById('startCount').addEventListener('click', function(){
    dateTarget = document.getElementById('dateInput').value;
    dateVerify(dateTarget);
});

function dateVerify(date){
    let dateArray;
    if(date >= dateNow){
        dateArray = date.split("-");
        year = dateArray[0];
        month = dateArray[1];
        day = dateArray[2];
        localStorage.setItem('year',year);
        localStorage.setItem('month',month);
        localStorage.setItem('day',day);
        location.replace('./contador.html');
        
    }else{
        alert("Informe uma data futura")
    } 
}


