let dateTarget;
let day;
let month;
let year;
const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth()+1;
const currentDay = new Date().getDate();
let dateNow;

if(currentMonth < 10){
    dateNow = `${currentYear}-0${currentMonth}-${currentDay+1}`;
}else{
dateNow = `${currentYear}-${currentMonth}-${currentDay+1}`;
}

window.addEventListener('load', ()=>{
document.getElementById('dateInput').setAttribute('min',dateNow);
});

document.getElementById('startCount').addEventListener('click', function(){
    dateTarget = document.getElementById('dateInput').value;
    dateVerify(dateTarget);
});

function dateVerify(date){
    let dateArray;
    if(date >= dateNow){
        dateArray = date.split("-");
        year = dateArray[2];
        month = dateArray[1];
        day = dateArray[0];
        location.assign('./contador.html');
        
    }else{
        alert("Informe uma data futura")
    } 
}


