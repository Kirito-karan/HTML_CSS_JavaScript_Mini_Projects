window.onload = ()=>{
    document.getElementById("start").onclick = calculateTime;
    document.getElementById("reset").onclick = reset;
}


function calculateTime () {

    let date = document.getElementById("date");
    let time = document.getElementById("time");
    let stop = document.getElementById("stop");

  let endTime = new Date(date.value + " " + time.value);

  let interval = setInterval(() => calculate(endTime), 1000);

    stop.addEventListener('click', ()=>{
        clearInterval(interval);
    })
}
    
function calculate(endTime) {
  let currentTime = new Date();

  let days = document.querySelector("#countdown-days");
  let hours = document.querySelector("#countdown-hours");
  let minutes = document.querySelector("#countdown-minutes");
  let seconds = document.querySelector("#countdown-seconds");

  if (endTime > currentTime) {
    let timeLeft = (endTime - currentTime) / 1000;

    days.innerText = Math.floor(timeLeft / 3600 / 24);
    hours.innerText = Math.floor((timeLeft / 3600) % 24);
    minutes.innerText = Math.floor((timeLeft / 60) % 60);
    seconds.innerText = Math.floor(timeLeft % 60);

  } else {
    days.innerText = 0;
    hours.innerText = 0;
    minutes.innerText = 0;
    seconds.innerText = 0;
  }
}

function reset(){
    
  document.querySelector("#countdown-days").innerText = 0;
  document.querySelector("#countdown-hours").innerText = 0;
  document.querySelector("#countdown-minutes").innerText = 0;
  document.querySelector("#countdown-seconds").innerText = 0;
}