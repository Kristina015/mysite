(() => {
  const modal = document.querySelector("[data-modal]");
  const openButtons = document.querySelectorAll("[data-modal-open]");
  const closeButton = document.querySelector("[data-modal-close]");

  // ВІДКРИТИ модалку для кожної кнопки
  openButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      modal.classList.remove("is-hidden");
    });
  });

  // ЗАКРИТИ по Х
  closeButton.addEventListener("click", () => {
    modal.classList.add("is-hidden");
  });

  // Закриття при кліку на фон
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("is-hidden");
    }
  });

  // Закриття по ESC
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modal.classList.add("is-hidden");
    }
  });
})();
