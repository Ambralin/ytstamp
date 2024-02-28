setInterval(() => {
  const videoPlayer = document.querySelector('.html5-main-video');
  if (videoPlayer) {
    currentTime = videoPlayer.currentTime;

    const videoUrl = new URL(window.location.href);
    videoUrl.searchParams.set('t', (currentTime.toFixed(0) + 's'));
    window.history.replaceState({}, '', videoUrl.href);
  }
}, 5000);