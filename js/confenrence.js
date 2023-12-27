document.addEventListener('DOMContentLoaded', function () {
    const cardsContainer = document.getElementById('conferenceContainer');
    const cards = document.querySelectorAll('.conference-card');
    let currentIndex = 0;
    let autoScrollInterval;
    let touchStartX = 0;

    function showCard(index) {
        cards.forEach((card, i) => {
            if (i === index) {
                card.style.display = 'block';
                card.style.display = 'flex';

            } else {
                card.style.display = 'none';
            }
        });
    }
    function startAutoScroll() {
        autoScrollInterval = setInterval(nextCard, 4000); // Change card every 3 seconds (adjust as needed)
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

    function nextCard() {
        currentIndex = (currentIndex + 1) % cards.length;
        showCard(currentIndex);
    }

    function prevCard() {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        showCard(currentIndex);
    }


    document.getElementById('prevConference').addEventListener('click', function () {
        console.log("prev")
        // stopAutoScroll();
        prevCard();
        startAutoScroll();
    });

    document.getElementById('nextConference').addEventListener('click', function () {
        console.log("next")

        // stopAutoScroll();
        nextCard();
        startAutoScroll();
    });

    // Initial setup
    showCard(currentIndex);
      startAutoScroll();
});

  