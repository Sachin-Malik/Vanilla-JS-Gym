
const hour = document.getElementById('hourInput');
const minute = document.getElementById('minuteInput');
const second = document.getElementById('secondInput');


const startPauseButton = document.getElementById('start-pause');
const ResetButtonButton = document.getElementById('reset');

var countdownTimer = null;

//Intialize
(function () {
    hour.value = "00";
    minute.value = "00";
    second.value = "00";
})()

function startTimer() {
    if (hour.value == 0 && minute.value == 0 && second.value == 0) return;
    startPauseButton.innerHTML = 'Pause';
    countdownTimer = setInterval(() => {
        timer();
    }, 1000)
    console.log(countdownTimer);
}

function stopTimer(event) {
    clearInterval(countdownTimer);
    if (event === 'PAUSE')
        startPauseButton.innerHTML = 'Resume';
    else if (event === 'FINISH')
        startPauseButton.innerHTML = 'Start';
    return;
}
function timer() {
    if (hour.value == 0 && minute.value == 0 && second.value == 0) {
        stopTimer('FINISH');
        return;
    };
    if (second.value != 0) {
        second.value -= 1;
        styleFormat(second);
    } else if (second.value == 0 && minute.value != 0) {
        second.value = 59;
        minute.value -= 1;
        styleFormat(minute);
    } else if (minute.value == 0 && hour.value != 0) {
        minute.value = 59;
        second.value = 59;
        hour.value -= 1;
        styleFormat(hour);
    }
}

function handleStartPause() {
    if (startPauseButton.innerHTML === 'Pause') {
        stopTimer('PAUSE');
    } else {
        startTimer();
    }
}

function handleReset() {
    hour.value = "00";
    minute.value = "00";
    second.value = "00";
}

function styleFormat(time) {
    if (time.value < 10) time.value = 0 + time.value;
}