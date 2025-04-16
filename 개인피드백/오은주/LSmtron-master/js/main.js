let bgmenu = document.querySelectorAll(".main .bg-menu li");
let video = document.querySelector("video");
let bgControlCon = document.querySelector(".bgControl_con");
let svgCircle = document.querySelector(".bgControl_con svg");
let service = document.querySelectorAll(".main div.nav .service li");
let gnb = document.querySelectorAll(".menu>li");
let sub = document.querySelectorAll(".sub-menu");
let BgStrimig = true;
gnb.forEach(function (v, k) {
  v.onmouseenter = function () {
    document.querySelector(".wrap").querySelector(".nav").classList.add("on");
    document.querySelector(".navBg").classList.add("on");
    document
      .querySelector(".logo")
      .querySelector("p")
      .querySelector("img").src = "./imges/logo_over.svg";
  };
});
sub.forEach(function (v, k) {
  v.onmouseenter = function () {
    v.style.height = "400px";
    document.querySelector(".navBg").classList.add("on");
    document.querySelector(".wrap").querySelector(".nav").classList.add("on");
  };
});
bgmenu[0].querySelector("span").classList.add("on");

function down() {
  bgmenu.forEach(function (v, k) {
    v.querySelector("span").classList.remove("on");
  });
}

bgmenu.forEach(function (v, k) {
  v.onclick = function () {
    down();
    this.querySelector("span").classList.add("on");
  };
});

document.querySelectorAll(".bg-menu li").forEach(function (v, k) {
  v.onclick = function (e) {
    e.preventDefault();
    window.scrollTo({
      top: document.querySelector(`.content${k + 1}`).offsetTop,
      behavior: "smooth",
    });
  };
});

bgControlCon.onclick = function () {
  if (BgStrimig) {
    video.pause();
    bgControlCon.querySelector("img").src = "./imges/bg_control2.svg";
    svgCircle.style.animationPlayState = "paused";
  } else {
    video.play();
    bgControlCon.querySelector("img").src = "./imges/bg_control1.svg";
    svgCircle.style.animationPlayState = "running";
  }
  BgStrimig = !BgStrimig;
};

service.forEach(function (v, k) {
  v.onclick = function () {
    v.classList.toggle("on");
    v.querySelector(".sv-list").classList.toggle("on");

    v.onmouseleave = function () {
      v.classList.remove("on");
      v.querySelector(".sv-list").classList.remove("on");
    };
  };
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  keyboard: {
    enabled: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
