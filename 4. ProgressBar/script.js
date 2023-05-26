let duration = 2;
function fillBarByTimeout() {
    var progressDiv = document.getElementById('progress');
    let start = 0;
    function updateLoading() {
        if (start++ < 100) {
            progressDiv.style.width = `${start}%`
            setTimeout(updateLoading, duration * 1000 / 100);
        }
    }
    updateLoading();
}

function fillBarByInterval() {
    var progressDiv = document.getElementById("progress");
    let start = 0;
    var interval = setInterval(() => {
        if (start >= 100)
            clearInterval(interval);
        start++;
        progressDiv.style.width = `${start}%`
    }, duration * 1000 / 100)
}