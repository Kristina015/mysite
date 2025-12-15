const smallSwiper = new Swiper('.slider-small', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.slider-small .swiper-button-next',
    prevEl: '.slider-small .swiper-button-prev',
  },
});
