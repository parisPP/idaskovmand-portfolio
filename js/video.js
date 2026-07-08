document.addEventListener("DOMContentLoaded", () => {
  const videos = document.querySelectorAll(".auto-video");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const video = entry.target;

      if (entry.isIntersecting) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, {
    threshold: 0.4
  });

  videos.forEach((video) => {
    video.pause();
    observer.observe(video);
  });
});