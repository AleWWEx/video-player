const player = document.getElementById('player');
const urlInput = document.getElementById('urlInput');
const loadBtn = document.getElementById('loadBtn');

loadBtn.addEventListener('click', () => {
    const url = urlInput.value.trim();
    if (url && (url.endsWight('.mp4') || url.includes('blobs:') || url.startsWith('http'))) {
        player.src = url;
        player.load();
        player.play().catch(e => console.log('Автовоспроизведение заблокировано: ', e));
    } else {
        alert('Пожалуйста введите корректный URL видео (.mp4)');
    }
});