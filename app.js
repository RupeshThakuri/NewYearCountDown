const days=document.getElementById('d');
const hrs=document.getElementById('h');
const mins=document.getElementById('m');
const secs=document.getElementById('s');

const newYearDate=new Date("Jan 1, 2023 00:00:00").getTime();

updateCountDown();

function updateCountDown(){
    const now= new Date().getTime();
    let difference=newYearDate-now;
    const seconds= 1000;
    const minutes=seconds*60;
    const hours=minutes*60;
    const day=hours*24;

    const d=Math.floor(difference/day);
    const h=Math.floor((difference%day)/hours);
    const m=Math.floor((difference%hours)/minutes);
    const s=Math.floor((difference%minutes)/seconds);

    days.innerText=d;
    hrs.innerText=h;
    mins.innerText=m;
    secs.innerText=s;

    setTimeout(updateCountDown,1000);
}