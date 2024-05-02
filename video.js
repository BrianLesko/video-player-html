document.addEventListener('DOMContentLoaded', function() {
    const player = document.getElementById('videoPlayer');

    // Play video
    player.play();

    // Event listener for pausing
    player.addEventListener('pause', function() {
        console.log('Video is paused');
    });

    // Event listener for playing
    player.addEventListener('play', function() {
        console.log('Video is playing');
    });
});
