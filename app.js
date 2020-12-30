const deg = 6;
const hour = document.getElementById('hour');
const minute = document.getElementById('min');
const second = document.getElementById('sec');

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hour.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
    minute.style.transform = `rotateZ(${mm}deg)`;
    second.style.transform = `rotateZ(${ss}deg)`;
}, 1000)
