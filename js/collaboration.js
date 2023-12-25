// var copy = document.querySelector(".logos-slide").cloneNode(true);
// document.querySelector(".logos").appendChild(copy);

var swiper = new Swiper(".mySwiper", {
      autoHeight: true,
      slidesPerView: 6,
      breakpoints: {
            200: {
                  slidesPerView: 1,
                  spaceBetween: 10,
            },
            480: {
                  slidesPerView: 2,
                  spaceBetween: 10,
            },
            640: {
                  slidesPerView: 3,
                  spaceBetween: 10,
            },
            768: {
                  slidesPerView: 4,
                  spaceBetween: 10,
            },
            1024: {
                  slidesPerView: 6,
                  spaceBetween: 10,
            },
      },
      spaceBetween: 10,
      loop: true,
      navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
      },
      autoplay: {
            delay: 3500,
            disableOnInteraction: true,
      }
});
var swiper = new Swiper(".mySwiper2", {
      autoHeight: true,
      slidesPerView: 6,
      breakpoints: {
            200: {
                  slidesPerView: 2,
                  spaceBetween: 10,
            },
            480: {
                  slidesPerView: 3,
                  spaceBetween: 10,
            },
            640: {
                  slidesPerView: 4,
                  spaceBetween: 10,
            },
            768: {
                  slidesPerView: 5,
                  spaceBetween: 10,
            },
            1024: {
                  slidesPerView: 7,
                  spaceBetween: 10,
            },
      },
      spaceBetween: 10,
      loop: true,
      navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
      },
      autoplay: {
            delay: 3500,
            disableOnInteraction: true,
      }
});