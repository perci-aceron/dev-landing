const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 3,
  centeredSlides: true,
  effect: "coverflow",
  coverflowEffect: {
    stretch: 0,
    depth: 300,
    modifier: 1,
    rotate: 0,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
