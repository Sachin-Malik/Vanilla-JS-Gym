
const hour = document.getElementById('hourInput');
const minute = document.getElementById('minuteInput');
const second = document.getElementById('secondInput');


const startPauseButton = document.getElementById('start-pause');
const ResetButtonButton = document.getElementById('reset');

var countdownTimer = null;


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
        if (second.value < 10) second.value = 0 + second.value;
    } else if (second.value == 0 && minute.value != 0) {
        second.value = 59;
        minute.value -= 1;
        if (minute.value < 10) minute.value = 0 + minute.value;
    } else if (minute.value == 0 && hour.value != 0) {
        hour.value -= 1;
        if (hour.value < 10) hour.value = 0 + hour.value;
        minute.value = 59;
        second.value = 59;
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