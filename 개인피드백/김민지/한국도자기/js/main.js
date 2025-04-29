const swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    init: function () {
      const realSlides = this.slides.filter(
        (slide) => !slide.classList.contains("swiper-slide-duplicate")
      );
      const total = realSlides.length;
      const totalText = total < 10 ? `0${total}` : `${total}`;
      const totalEl = document.querySelector(".custom-pagination .total");

      if (totalEl) {
        totalEl.textContent = totalText;
      }

      updateCurrent(this.realIndex);
    },
    slideChange: function () {
      updateCurrent(this.realIndex);
    },
  },
});

function updateCurrent(index) {
  const currentText = index + 1 < 10 ? `0${index + 1}` : `${index + 1}`;
  const currentEl = document.querySelector(".custom-pagination .current");

  if (currentEl) {
    currentEl.textContent = currentText;
  }
}

// menu

$(".submenu").slideUp(500);

$(".menu ul li").hover(
  function () {
    $(".submenu").stop().slideDown(500);
  },
  function () {
    $(".submenu").stop().slideUp(500);
  }
);

$(".submenu .lnb> ul> li").hover(
  function () {
    let i = $(this).index();
    console.log(i);
    $(".submenu").stop().slideDown(500);
    $(".menu ul li").eq(i).find("a").addClass("on");
  },
  function () {
    $(".submenu").stop().slideUp(500);
    $(".menu ul li a").removeClass("on");
  }
);

window.addEventListener("scroll", function () {
  const logo = document.querySelector(".logo"); // h1.logo 가져옴
  const logoImg = document.querySelector(".logo img"); // h1.logo 안에 있는 img 가져옴

  if (window.scrollY > 50) {
    logo.classList.add("shrink");
    logoImg.src = "./img/logo-scroll.png"; // 스크롤하면 로고이미지 변경
  } else {
    logo.classList.remove("shrink");
    logoImg.src = "./img/logo-default.png"; // 원래 로고이미지 복귀
  }
});
//con4----------

const swiper4 = new Swiper(".mySwiper4", {
  slidesPerView: 3.5,
  spaceBetween: 24,
  navigation: {
    nextEl: "#nextBtn",
    prevEl: "#prevBtn",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },

  // document
  //   .getElementById("prevBtn")
  //   .addEventListener("click", () => swiper.slidePrev());

  // document
  //   .getElementById("nextBtn")
  //   .addEventListener("click", () => swiper.slideNext());
});
