
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let mm = 0;
let ss = 0;

let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let interval;
let flag = 1;

start.addEventListener('click', () => {
    if (flag === 1) {
        flag = 2;
        interval = setInterval(Start, 1000);
    }
})

function Start() {
    ss++;
    sec.innerText = String(ss).padStart(2, "0");
    console.log(ss);
}

stop.addEventListener('click', () => {
    clearTimeout(interval);
    flag = 0;
})
