(() => {
  // Модалка
  const modal = document.querySelector("[data-modal]");
  const openButtons = document.querySelectorAll("[data-modal-open]");
  const closeButton = document.querySelector("[data-modal-close]");

  openButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      modal.classList.remove("is-hidden");
    });
  });

  closeButton.addEventListener("click", () => {
    modal.classList.add("is-hidden");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.add("is-hidden");
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") modal.classList.add("is-hidden");
  });

  // Чат
  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".chat-button");
    const win = document.querySelector(".chat-window");
    const closeBtn = document.querySelector(".chat-close");
    const field = document.querySelector("#chatField");
    const sendBtn = document.querySelector("#chatSend");
    const messages = document.querySelector(".chat-messages");

    if (!btn || !win || !closeBtn || !field || !sendBtn || !messages) return;

    btn.onclick = () => win.classList.toggle("open");
    closeBtn.onclick = () => win.classList.remove("open");
    sendBtn.onclick = sendMessage;
    field.onkeydown = (e) => { if (e.key === "Enter") sendMessage(); };

    function sendMessage() {
      const text = field.value.trim();
      if (text === "") return;

      messages.innerHTML += `<div class="msg user">${text}</div>`;
      field.value = "";

      setTimeout(() => {
        messages.innerHTML += `<div class="msg bot">Дякую за повідомлення! Ми скоро відповімо</div>`;
        messages.scrollTop = messages.scrollHeight;
      }, 700);

      messages.scrollTop = messages.scrollHeight;
    }
  });


// Sticky header при скролі
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if(window.scrollY > 50){
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Анімація появи карток при скролі
const drinkItems = document.querySelectorAll('.drink-item');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

drinkItems.forEach(item => observer.observe(item));

// Слайдер напоїв
const drinksSwiper = new Swiper('.drink-swiper', {
  direction: 'horizontal',
  loop: true,
  pagination: { el: '.drink-swiper .swiper-pagination', clickable: true },
  navigation: { 
    nextEl: '.drink-swiper .swiper-button-next', 
    prevEl: '.drink-swiper .swiper-button-prev' 
  },
  scrollbar: { el: '.drink-swiper .swiper-scrollbar', draggable: true },
  slidesPerView: 3,
  spaceBetween: 30,
  breakpoints: {
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }
});

// Слайдер локації
const locationSwiper = new Swiper('.location-swiper', {
  direction: 'horizontal',
  loop: true,
  pagination: { el: '.location-swiper .swiper-pagination', clickable: true },
  navigation: { 
    nextEl: '.location-swiper .swiper-button-next', 
    prevEl: '.location-swiper .swiper-button-prev' 
  },
  scrollbar: { el: '.location-swiper .swiper-scrollbar', draggable: true },
  slidesPerView: 1,
  autoplay: { delay: 4000 },
});

})();
