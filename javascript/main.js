class VideoPlayer {
  constructor() {
    this.videoPlayer = document.getElementById('video-player');
    this.videoTitle = document.querySelector('.video-description .title');
  }

  async playVideo(videoId) {
    try {
      const response = await fetch('video.json');
      const videoData = await response.json();
      const video = videoData.find(video => video['id'] === parseInt(videoId));

      if (!video) {
        throw new Error(`Video with ID ${videoId} not found`);
      }

      const videoUrl = video.url;
      const videoTitle = video.title;

      this.videoPlayer.src = videoUrl;
      this.videoPlayer.load();
      this.videoPlayer.play();
      this.videoTitle.textContent = videoTitle;
    } catch (error) {
      console.error(error);
    }
  }
}

const videoPlayer = new VideoPlayer();

const buttons = document.querySelectorAll('.button-play');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const videoId = button.getAttribute('data-id');
    videoPlayer.playVideo(videoId);
  });
});
