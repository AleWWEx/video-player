const video = document.getElementById('video');
const playBtn = document.getElementById('playBtn');
const progress = document.getElementById('progress');
const timeDisplay = document.getElementById('time');
const volumeControle = document.getElementById('volume');

function formatTime(second) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' + secs : secs}`;
}

function updateProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progress.value = isNaN(percent) ? 0 : percent;

    const currentTime = formatTime(video.currentTime);
    const duration = isNaN(video.duration) ? '0:00' : formatTime(video.duration);
    timeDisplay.textContent = `${currentTime} / ${duration}`;
}

playBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playBtn.textContent = '⏸';
    } else {
        video.pause();
        playBtn.textContent = '▶';
    }
});

progress.addEventListener('input', () => {
    const newTime = (progress.value / 100) * video.duration;
    video.currentTime = newTime;
});

video.addEventListener('timeupdate', updateProgress);

video.addEventListener('loadedmetadata', updateProgress);

setTimeout(() => {
    updateProgress();
}, 500);

volumeControle.addEventListener('input', () => {
    video.volume = volumeControle.value;
});