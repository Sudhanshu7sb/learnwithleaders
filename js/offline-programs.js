document.addEventListener('DOMContentLoaded', function () {
    const cardsContainer = document.getElementById('offlineCardsContainer');
    const cards = document.querySelectorAll('.offline-card');
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
        autoScrollInterval = setInterval(nextCard, 3000); // Change card every 3 seconds (adjust as needed)
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

    document.getElementById('prevOfflineBtn').addEventListener('click', function () {
        stopAutoScroll();
        prevCard();
        // startAutoScroll();
    });

    document.getElementById('nextOfflineBtn').addEventListener('click', function () {
        stopAutoScroll();
        nextCard();
        // startAutoScroll();
    });

    // Initial setup
    showCard(currentIndex);
    //   startAutoScroll();
});