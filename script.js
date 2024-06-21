document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('backgroundVideo');
    video.play();
    video.addEventListener('ended', function() {
        video.play();
    });
});