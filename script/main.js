import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const swiper = new Swiper(".swiper", {
  autoplay: {
    enabled: true,
    delay: 1500,
  },
  loop: true,
  slidesPerView: 5,
  spaceBetween: 12,
});

const swiperReverse = new Swiper(".swiper-reverse", {
  autoplay: {
    delay: 1500,
    reverseDirection: true,
    waitForTransition: true,
  },
  loop: true,
  slidesPerView: 5,
  spaceBetween: 12,
});
