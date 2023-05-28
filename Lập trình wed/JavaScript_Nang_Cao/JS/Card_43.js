let timeh1 = document.querySelector("h1");
let clock1 = document.querySelector(".clock");


setInterval(() => {
  let d = new Date();
  timeh1.innerHTML = d.toDateString() + " " + d.toTimeString();
}, 1000);

function play() {
    var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
    audio.play();
  }

const setAlam = (seconds) => {
    let s = new Date().getTime();
    setTimeout(() => {
        play();
    }, seconds * 1000);
    setInterval(() => {
        secondsLeft  = -(new Date().getTime() - (s + seconds * 1000))
        if(secondsLeft > 0 ) {
            clock1.innerHTML = "Clock runing in " + Math.floor(secondsLeft / 1000)  + " seconsd" ;
        }
    })
}

let message = prompt("Nhap giay cho truong trinh");

setAlam(parseInt(message))