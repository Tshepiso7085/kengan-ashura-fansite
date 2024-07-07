class VideoPlayer{
  constructor(){
    this.videoPlayer = document.getElementById('video-player');
    this.videoTitle = document.querySelector('.video-description .title');
  }

  async playvideo(videoId){
    try{
      const response = await fetch('video.json');
      const videoData = await response.json();
      const video = videoData.find(video => video['id'] === parseInt(videoId));
      const videoUrl = video.url;
      const videoTitle = video.title;
      console.log(this.videoPlayer);
      const sourceElement = this.videoPlayer.querySelector('source');
      sourceElement.src = videoUrl;
      this.videoPlayer.load();
      this.videoPlayer.play();
      this.videoTitle.textContent = videoTitle;
    } catch(error){
      console.error(error);
    }
  }
}

const videoPlayer = new VideoPlayer();
const buttons = document.querySelectorAll('.button-play');

buttons.forEach(button =>{
  button.addEventListener('click', () => {
    const videoId = button.getAttribute('data-id');
    videoPlayer.playvideo(videoId);
  })
})