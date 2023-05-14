const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function getInitialRotation() {
    let date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    let secondRotation = ((seconds / 60) * 360) + 90;
    let minuteRotation = ((minutes / 60) * 360) + 90;
    let hourRotation = ((hours / 12) * 360) + 90;


    let result = [secondRotation, minuteRotation, hourRotation];
    secondHand.style.transform = `rotate(${secondRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
    hourHand.style.transform = `rotate(${hourRotation}deg)`
    return result;
}

let [secondRotation, minuteRotation, hourRotation] = getInitialRotation();

setInterval(() => {
    secondRotation += 6;
    secondHand.style.transform = `rotate(${secondRotation}deg)`;
}, 1000)

setInterval(() => {
    minuteRotation += 6;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
}, 60000);

setInterval(() => {
    hourRotation += 30;
    hourHand.style.transform = `rotate(${hourRotation}deg)`;
}, 3600000);
