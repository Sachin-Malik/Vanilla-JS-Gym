
window.addEventListener('keydown', keyPressed)

function keyPressed(e) {
    animateButton(e);
    playSound(e);
}
function playSound(e) {
    const sound = document.querySelector(`audio[id="${e.keyCode}"]`);
    if (!sound) return;
    sound.currentTime = 0;
    sound.play();
}
function animateButton(e) {
    const keyPressed = e.code;
    const button = document.getElementById(keyPressed);
    button.classList.add('playing');
    setTimeout(() => { button.classList.remove('playing') }, 100);
}