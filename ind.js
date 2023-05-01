const departMinute = 5;
let temps = departMinute * 60;

const timerElement = document.getElementById('timer');

setInterval(() => {
    let minutes = parseInt(temps / 60 , 10);
    let second = parseInt(temps %60 , 10);

    minutes = minutes < 10 ? "0" + minutes : minutes
    second = second < 10 ? "0" + second : second  
     

    timerElement.innerText =`${minutes}:${second}`;
    temps = temps <= 0 ? 0 : temps - 1

}, 1000);