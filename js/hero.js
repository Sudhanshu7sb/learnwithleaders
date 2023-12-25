var swiper = new Swiper(".mySwiperHero", {
  autoHeight: false,
  slidesPerView: 4,
  breakpoints: {
        200: {
              slidesPerView: 1,
              spaceBetween: 5,
        },
        480: {
              slidesPerView: 1.25,
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
  // autoplay: {
  //       delay: 3500,
  //       disableOnInteraction: true,
  // }
});