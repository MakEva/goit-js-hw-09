const refs = {
    startBtn: document.querySelector("button[data-start]"),
    stopBtn: document.querySelector("button[data-stop]"),
    body: document.querySelector("body")
}


let timerId = null;

refs.startBtn.addEventListener("click", onStartBtnClock);


function onStartBtnClock() {
    timerId = setInterval(() => {
        let randomColor = getRandomHexColor()
        refs.body.style.backgroundColor = randomColor;
    }, 1000);
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

refs.stopBtn.addEventListener("click", onStopBtnClick);

function onStopBtnClick() {
    clearInterval(timerId);
    refs.stopBtn.disabled = true;
    refs.startBtn.disabled = false;
}



