let day = document.getElementById("day");
let hours = document.getElementById("hours");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

console.log(day);

let curentDay = new Date().getDate();
console.log(curentDay);

const birthday = new Date('31 August 2024 00:00:00');
console.log(birthday);

function timer() {
    let todayDate = Date.now()
    console.log(todayDate)
    let gap = birthday - todayDate
    console.log(gap)

    let d = Math.floor(gap/1000/60/60/24);

    let h = Math.floor((gap / 1000 / 60 / 60) %24);

    let m = Math.floor((gap / 1000 / 60) %60);

    let s = Math.floor((gap / 1000) % 60);

    console.log(d, h, m, s);

    day.innerHTML = d; 
    hours.innerHTML = h;
    min.innerHTML = m;
    sec.innerHTML = s;

} setInterval(timer, 1000);

timer();