let videoPlayerApp = (function () {

    //Cache DOM
    const player = document.querySelector(".videoplay-cont");
    const videoInPlayer = document.querySelector(".videoplay-cont video");
    const allVideosInPlaylist = document.querySelectorAll(".vid video");
    const playButton = document.querySelector(".play-button");
    const stopButton = document.querySelector(".stop-button");


    //Make all videos in playlist bind to play event
    for (let i = 0; i < allVideosInPlaylist.length; i++) {
        allVideosInPlaylist[i];
        makeVideoPlayable(allVideosInPlaylist[i])
    }

    //TODO: Bind video to play event
    function makeVideoPlayable(currVideo) {
        currVideo.addEventListener('click', function () {
            videoInPlayer.src = this.src;
            videoInPlayer.play()
        })
    }

    //BindEvents
    videoInPlayer.addEventListener('click', togglePlay, false);
    videoInPlayer.addEventListener('play', updatePlayBtnState, false);
    videoInPlayer.addEventListener('pause', updatePlayBtnState, false);
    playButton.addEventListener("click", togglePlay, false);
    stopButton.addEventListener("click", stopVideo, false);

    //TODO: Make video in video player pause or play
    function togglePlay() {
        if (videoInPlayer.src) {
            const method = videoInPlayer.paused ? 'play' : 'pause';
            console.log(videoInPlayer.src)
            videoInPlayer[method]()
        }
    }

    //TODO: Update play button in video player state
    function updatePlayBtnState() {
        playButton.innerHTML = this.paused ? 'Play' : 'Pause';
    }

    //TODO: Update play button in video player state
    function stopVideo() {
        videoInPlayer.src = ""
        togglePlay()
    }

    return {
        togglePlay: togglePlay,
        stopVideo: stopVideo
    };
})();