var swiper = new Swiper(".mySwiperHero", {
  autoHeight: false,
  slidesPerView: 4,
  breakpoints: {
        200: {
              slidesPerView: 1,
              spaceBetween: 5,
        },
        480: {
              slidesPerView: 1,
              spaceBetween: 5,
        },
        640: {
              slidesPerView: 2,
              spaceBetween: 10,
        },
        768: {
              slidesPerView: 3,
              spaceBetween: 10,
        },
        1024: {
              slidesPerView: 4,
              spaceBetween: 10,
        },
  },
  spaceBetween: 10,
  loop: true,
  autoplay: {
        delay: 3500,
        disableOnInteraction: true,
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const cardsContainer = document.getElementById('heroCardsContainer');
  const cards = document.querySelectorAll('.hero-card');
  let currentIndex = 0;
  let autoScrollInterval;
  let touchStartX = 0;

  function showCard(index) {
      cards.forEach((card, i) => {
          if (i === index) {
              card.style.display = 'block';
          } else {
              card.style.display = 'none';
          }
      });
  }

  function nextCard() {
      currentIndex = (currentIndex + 1) % cards.length;
      showCard(currentIndex);
  }

  function prevCard() {
      currentIndex = (currentIndex - 1 + cards.length) % cards.length;
      showCard(currentIndex);
  }

  function startAutoScroll() {
      autoScrollInterval = setInterval(nextCard, 2500); // Change card every 3 seconds (adjust as needed)
  }

  function stopAutoScroll() {
      clearInterval(autoScrollInterval);
  }

  function handleTouchStart(event) {
      touchStartX = event.touches[0].clientX;
  }

  function handleTouchEnd(event) {
      const touchEndX = event.changedTouches[0].clientX;
      const swipeThreshold = 50; // Adjust the threshold as needed

      if (touchEndX < touchStartX - swipeThreshold) {
          stopAutoScroll();
          nextCard();
            startAutoScroll();
      } else if (touchEndX > touchStartX + swipeThreshold) {
          stopAutoScroll();
          prevCard();
            startAutoScroll();
      }
  }

  cardsContainer.addEventListener('touchstart', handleTouchStart);
  cardsContainer.addEventListener('touchend', handleTouchEnd);

  // document.getElementById('prevMasterclass').addEventListener('click', function () {
  //     stopAutoScroll();
  //     prevCard();
  //     // startAutoScroll();
  // });

  // document.getElementById('nextMasterclass').addEventListener('click', function () {
  //     stopAutoScroll();
  //     nextCard();
  //     // startAutoScroll();
  // });

  // Initial setup
  showCard(currentIndex);
    startAutoScroll();
});