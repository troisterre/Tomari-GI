document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".swiper", {
    loop: true,
    spaceBetween: 20,
    autoHeight: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 1,
    breakpoints: {
      560: {
        slidesPerView: 2,
      },
    },
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const accordionItems = document.querySelectorAll(".js-ac");

  function closeAll() {
    accordionItems.forEach((item) => item.classList.remove("active"));
  }

  accordionItems.forEach((item) => {
    const title = item.querySelector(".js-ac-title");

    if (title) {
      title.addEventListener("click", () => {
        const isOpen = item.classList.contains("active");
        closeAll();
        if (!isOpen) {
          item.classList.add("active");
        }
      });
    }
  });

  // ウィンドウサイズ変更でアコーディオンを閉じる
  window.addEventListener("resize", () => {
    closeAll();
  });
});
