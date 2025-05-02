document.addEventListener("DOMContentLoaded", () => {
  // 메인 텍스트 전환
  const mainText = document.querySelectorAll(".left ul li");
  const len = document.querySelectorAll(".right .swiper-slide").length;

  if (mainText.length > 0) {
    mainText[0].classList.add("on");
  }

  function myfnc() {
    mainText.forEach(function (v) {
      v.classList.remove("on");
      const h1 = v.querySelector("h1");
      if (h1) h1.classList.remove("on");
    });
  }

  // 메인 스와이퍼
  const swiper = new Swiper(".mySwiper", {
    speed: 1000,
    grabCursor: true,
    loop: true,
    effect: "creative",
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    creativeEffect: {
      prev: {
        shadow: true,
        translate: [0, 0, -400],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      slideChange: function () {
        myfnc();
        if (mainText[this.realIndex]) {
          mainText[this.realIndex].classList.add("on");
          const h1 = mainText[this.realIndex].querySelector("h1");
          if (h1) h1.classList.add("on");
        }
        document.querySelector(".page .start").innerText = `0${
          this.realIndex + 1
        }`;
        document.querySelector(".page .end").innerText = `0${len}`;
      },
    },
  });

  // GNB 메뉴 호버 서브메뉴
  $(".submenu").slideUp(500);

  $(".menu ul li").hover(
    function () {
      $(".submenu").stop().slideDown(500);
    },
    function () {
      $(".submenu").stop().slideUp(500);
    }
  );

  $(".submenu .lnb > ul > li").hover(
    function () {
      let i = $(this).index();
      $(".submenu").stop().slideDown(500);
      $(".menu ul li").eq(i).find("a").addClass("on");
    },
    function () {
      $(".submenu").stop().slideUp(500);
      $(".menu ul li a").removeClass("on");
    }
  );

  // 스크롤 시 로고 크기 및 이미지 변경
  window.addEventListener("scroll", function () {
    const logo = document.querySelector("header .logo");
    if (!logo) return;

    const logoImg = logo.querySelector("img");
    if (!logoImg) return;

    if (window.scrollY > 50) {
      logo.classList.add("shrink");
      logoImg.src = "./img/logo-scroll.png";
      logoImg.onerror = () => {
        logoImg.src =
          "https://group.hankook.com/default/img/onepixel/images/common/logo-default.png";
      };
    } else {
      logo.classList.remove("shrink");
      logoImg.src =
        "https://group.hankook.com/default/img/onepixel/images/common/logo-default.png";
    }
  });

  // 컬렉션 스와이퍼
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
  });

  // 브랜드 섹션 스와이퍼
  let brandslide = document.querySelectorAll(".mySwiper6 .swiper-slide");
  brandslide[0].classList.add("on");
  function mybrand() {
    brandslide.forEach(function (v, k) {
      v.classList.remove("on");
    });
  }
  const swiper6 = new Swiper(".mySwiper6", {
    slidesPerView: 3, // 한 번에 3개의 썸네일을 표시
    spaceBetween: 10,
    speed: 400,
    loop: true,
  });
  const swiper5 = new Swiper(".mySwiper5", {
    speed: 400,
    allowTouchMove: true,
    loop: false,
    navigation: {
      nextEl: "#brand-next",
      prevEl: "#brand-prev",
    },
    thumbs: {
      swiper: swiper6, // 큰 이미지와 썸네일 동기화
    },
    on: {
      slideChange: function () {
        console.log(this.realIndex);
        mybrand();
        brandslide[this.realIndex].classList.add("on");
      },
    },
  });

  // 위로가기 버튼
  const topBtn = document.querySelector(".top-button");
  if (topBtn) {
    topBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});

// 나타나기
const floating = document.querySelector(".floating-buttons");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    floating.classList.add("show");
  } else {
    floating.classList.remove("show");
  }
});
