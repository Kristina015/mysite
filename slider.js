// Слайдер напоїв
const locationSwiper = new Swiper('.location-swiper', {
  direction: 'horizontal',
  loop: true,
  pagination: { el: '.location-swiper .swiper-pagination', clickable: true },
  navigation: { nextEl: '.location-swiper .swiper-button-next', prevEl: '.location-swiper .swiper-button-prev' },
  scrollbar: { el: '.location-swiper .swiper-scrollbar', draggable: true },
  slidesPerView: 1,
  autoplay: { delay: 2000 },
});

