// const cardsContainer = document.getElementById('heroCardsContainer');
// const cards = document.querySelectorAll('.hero-carousel-item');
document.addEventListener('DOMContentLoaded', function () {
    const cardsContainer = document.getElementById('heroCardsContainer');
    const cards = document.querySelectorAll('.hero-carousel-item');
    let currentIndex = 0;
    let autoScrollInterval;
    let touchStartX = 0;
  
    function showCard(index) {
      cards.forEach((card, i) => {
        card.style.display = i === index ? 'block' : 'none';
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
      autoScrollInterval = setInterval(function () {
        nextCard();
      }, 3000); // Change card every 3 seconds (adjust as needed)
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
  
    document.getElementById('prevButton').addEventListener('click', function () {
      stopAutoScroll();
      prevCard();
      startAutoScroll();
    });
  
    document.getElementById('nextButton').addEventListener('click', function () {
      stopAutoScroll();
      nextCard();
      startAutoScroll();
    });
  
    // Initial setup
    showCard(currentIndex);
    startAutoScroll();
  });
  
  