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
        spaceBetween: 40,
      },
    },
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const accordionItems = document.querySelectorAll(".js-ac");

  function closeAll() {
    accordionItems.forEach((item) => {
      item.classList.remove("active");
    });
  }

  accordionItems.forEach((item) => {
    const title = item.querySelector(".js-ac-title");
    const content = item.querySelector(".c-ac__text");

    if (title && content) {
      title.addEventListener("click", () => {
        const isOpen = item.classList.contains("active");
        closeAll();
        if (!isOpen) {
          item.classList.add("active");
        }
      });
    }
  });

  // リサイズ時に閉じる
  window.addEventListener("resize", () => {
    closeAll();
  });
});
//ハンバーガーメニューのスライドダウン//
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".js-hamburger");
  const navMenu = document.querySelector(".js-nav");
  const navItems = document.querySelectorAll(".c-hamburger-nav__item"); // ← 正しいセレクターに修正

  toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle("active");
    navMenu.classList.toggle("is-open");
  });

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navMenu.classList.remove("is-open");
      toggleBtn.classList.remove("active");
    });
  });

  window.addEventListener("resize", () => {
    toggleBtn.classList.remove("active");
    navMenu.classList.remove("is-open");
  });
});

window.addEventListener("scroll", () => {
  if (navMenu.classList.contains("is-open")) {
    navMenu.classList.remove("is-open");
    toggleBtn.classList.remove("active");
  }
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 100, // ヘッダー高さを調整
        behavior: "smooth",
      });
    }
  });
});
//Google フォームへのリンクサンプル//
document.getElementById("goForm").addEventListener("click", () => {
  const checkbox = document.getElementById("agree");

  if (!checkbox.checked) {
    alert("プライバシーポリシーに同意してください。");
    return;
  }

  // チェック済みならGoogleフォームに遷移
  window.open(
    "https://docs.google.com/forms/d/e/1FAIpQLSfIbR-dC2lehVIXXd9q_G1h_TV2aW6dVA33pbxwbkRcVa9FNQ/viewform?usp=header",
    "_blank"
  );
});
//section fadein animation //
document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(".p-fadein");

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-show");
          obs.unobserve(entry.target); // 1回だけ表示したい場合
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  targets.forEach((target) => {
    observer.observe(target);
  });
});
