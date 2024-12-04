// This is a simple JavaScript example
document.addEventListener('DOMContentLoaded', function() {
    console.log('Hello, World!');
});
// Load the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Create a YouTube player
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '315',
        width: '560',
        videoId: 'BE-CyIDBHnw',
        playerVars: {
            'autoplay': 1,
            'controls': 1
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

// When the player is ready, set the volume to 0
function onPlayerReady(event) {
    event.target.setVolume(0);
}
