
document.addEventListener("DOMContentLoaded", function() {
  document.body.classList.add('fade-in');
});

document.addEventListener('DOMContentLoaded', function () {
  const hamburgerBtn = document.querySelector('.hamburger');
  const mobNav = document.querySelector('.mob-nav');
  const mobileBreakpoint = 950;

  const handleResize = () => {
      if (window.innerWidth > mobileBreakpoint) {
          if (mobNav.classList.contains('is-active')) {
              mobNav.classList.remove('is-active');
              mobNav.style.display = 'none';
              hamburgerBtn.classList.remove('is-active');
              document.body.style.overflow = 'auto';
          }
      }
  };

  hamburgerBtn.addEventListener('click', function () {
      hamburgerBtn.classList.toggle('is-active');
      if (mobNav.classList.contains('is-active')) {
          mobNav.classList.remove('is-active');
          setTimeout(() => {
              mobNav.style.display = 'none';
          }, 400);
      } else {
          mobNav.style.display = 'flex';
          setTimeout(() => {
              mobNav.classList.add('is-active');
          }, 10);
      }
      if (hamburgerBtn.classList.contains('is-active')) {
          document.body.style.overflow = 'hidden';
      } else {
          document.body.style.overflow = 'auto';
      }
  });

  window.addEventListener('resize', handleResize);
});
// document.addEventListener("DOMContentLoaded", function () {
//   const thumbnails = document.querySelectorAll(".thumbnail");
//   const playButtons = document.querySelectorAll(".playButt"); // New line
//   const videoModal = document.getElementById("videoModal");
//   const closeBtn = document.querySelector(".close");
//   const videoFrame = document.getElementById("videoFrame");
//   const headerWrapper = document.getElementById("headerWrapperHome");

//   thumbnails.forEach((thumbnail) => {
//     thumbnail.addEventListener("click", function () {
//       const videoUrl = this.getAttribute("data-video");
//       openVideoModal(videoUrl);
//     });
//   });

//   playButtons.forEach((playButton) => { // New block
//     playButton.addEventListener("click", function () {
//       const videoUrl = this.parentElement.querySelector(".thumbnail").getAttribute("data-video");
//       openVideoModal(videoUrl);
//     });
//   });

//   closeBtn.addEventListener("click", closeModal);
//   videoModal.addEventListener("click", closeModal);

//   function openVideoModal(videoUrl) { // New block
//     const videoId = extractVideoId(videoUrl);
//     if (videoId) {
//       const iframeSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
//       videoFrame.setAttribute("src", iframeSrc);
//       videoModal.style.display = "flex";
//     } else {
//       console.error("Invalid YouTube video URL");
//     }
//   }

//   function closeModal() {
//     videoModal.style.display = "none";
//     videoFrame.setAttribute("src", "");
//   }

//   function extractVideoId(videoUrl) {
//     const regex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
//     const match = videoUrl.match(regex);
//     return match ? match[1] : null;
//   }
// });


// window.addEventListener('load', function() {
//   function updateVideoSize() {
//       var screenWidth = window.innerWidth;
//       var video = document.getElementById('videoFrame');
//       if(screenWidth <= 600) {
//         video.width = '320';
//         video.height - '200';
//       }
//       else if (screenWidth <= 900) {
//           video.width = '560';
//           video.height = '315';
//       } else {
//           video.width = '840';
//           video.height = '472';
//       }
//   }
//   updateVideoSize();
//   window.addEventListener('resize', updateVideoSize);
// });

const body = document.body;
let lastScroll = 0;

window.addEventListener('scroll', () =>{
    
})

// Function to update the scale and opacity of elements based on scroll
function updateElementsOnScroll() {
    const scrollElements = document.querySelectorAll('.scroll-element');
    const windowHeight = window.innerHeight;
    const viewportCenter = windowHeight / 2;
  
    scrollElements.forEach(element => {
      const elementPosition = element.getBoundingClientRect();
      const elementCenter = elementPosition.top + (elementPosition.height / 2);
      let scaleValue, opacityValue;
  
      if (elementCenter <= viewportCenter) {
        scaleValue = 1;
        opacityValue = 1;
      } else if (elementPosition.top < windowHeight && elementPosition.bottom > 0) {
        const distanceFromCenter = Math.abs(viewportCenter - elementCenter);
        const maxDistance = windowHeight / 2;
        const ratio = Math.min(1, 1 - (distanceFromCenter / maxDistance));
        scaleValue = 0.8 + (0.2 * ratio);
        opacityValue = 0.5 + (0.5 * ratio);
      } else {
        scaleValue = 0.8;
        opacityValue = 0.5;
      }
  
      element.style.transform = `scale(${scaleValue})`;
      element.style.opacity = opacityValue;
    });
  }
  
  // Apply the initial styles when the page loads
  document.addEventListener('DOMContentLoaded', updateElementsOnScroll);
  
  // Update the styles on scroll
  document.addEventListener('scroll', updateElementsOnScroll);
  
