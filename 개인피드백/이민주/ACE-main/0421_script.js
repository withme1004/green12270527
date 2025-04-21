// script.js
function loadAlert() {
  alert("Test!");
}

// header
let nav = document.querySelector(".nav");
let gnbL = document.querySelector(".left").querySelectorAll(".one_dep");
let sub = document.querySelector(".left").querySelectorAll(".two_dep");
let gnbR = document.querySelector(".right").querySelectorAll(".one_dep");
let sub2 = document.querySelector(".right").querySelectorAll(".two_dep");

gnbL.forEach(function (v, k) {
  v.onmouseenter = function () {
    document.querySelector(".logo").style.display = "none";
    gnbL.forEach(function (item) {
      let spans = item.querySelectorAll("div > a > span");
      spans[0].style.display = "none"; // 첫 번째 span 숨기고
      spans[1].style.display = "block"; // 두 번째 span 보이기
    });
    document.querySelector(".nav").style.height = "280px";
    sub.forEach(function (v, k) {
      v.classList.add("on");
    });
    nav.classList.add("on");
    document.querySelector(".left").classList.add("on");
    v.querySelector(".down").style.color = "#0890c0";
    this.classList.add("on");
  };
  v.onmouseleave = function () {
    document.querySelector(".logo").style.display = "block";
    gnbL.forEach(function (item) {
      let spans = item.querySelectorAll("div > a > span");
      spans[0].style.display = "block"; // 첫 번째 span 숨기고
      spans[1].style.display = "none"; // 두 번째 span 보이기
    });
    document.querySelector(".nav").style.height = "0";
    sub.forEach(function (v, k) {
      v.classList.remove("on");
    });
    nav.classList.add("on");
    document.querySelector(".left").classList.remove("on");
    v.querySelector(".down").style.color = "#333";
    this.classList.remove("on");
  };
});
gnbR.forEach(function (v, k) {
  v.onmouseenter = function () {
    document.querySelector(".logo").style.display = "none";
    document.querySelector(".nav").style.height = "280px";
    sub2.forEach(function (v, k) {
      v.classList.add("on");
    });
    nav.classList.add("on");
    document.querySelector(".right").classList.add("on");
    v.querySelector("span").style.color = "#0890c0";
  };
  v.onmouseleave = function () {
    document.querySelector(".logo").style.display = "block";
    document.querySelector(".nav").style.height = "0";
    sub2.forEach(function (v, k) {
      v.classList.remove("on");
    });
    document.querySelector(".right").classList.remove("on");
    v.querySelector("span").style.color = "#333";
  };
});

// con
function updateBtn(swiperI) {
  const prevBtn = document.querySelector("#prev1");
  const nextBtn = document.querySelector("#next1");
  prevBtn.classList.toggle("disabled", swiperI.isBeginning);
  nextBtn.classList.toggle("disabled", swiperI.isEnd);
}
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: "#next1",
    prevEl: "#prev1",
  },
  on: {
    init(swiper) {
      updateBtn(swiper);
    },
    slideChange(swiper) {
      updateBtn(swiper);
    },
  },
});
const btnPrev = document.querySelector("#prev1");
const pathPrev = btnPrev.querySelector(".btn_prev1");
const btnNext = document.querySelector("#next1");
const pathnext = btnNext.querySelector(".btn_next1");

btnPrev.addEventListener("mouseenter", () => {
  pathPrev.setAttribute("d", "M 30 10 Q -10 65 30 140");
});
btnPrev.addEventListener("mouseleave", () => {
  pathPrev.setAttribute("d", "M 30 10 Q 30 65 30 140");
});
btnNext.addEventListener("mouseenter", () => {
  pathnext.setAttribute("d", "M 20 10 Q 60 65 20 140");
});
btnNext.addEventListener("mouseleave", () => {
  pathnext.setAttribute("d", "M 20 10 Q 20 65 20 140");
});
const btns = document.querySelectorAll(".btn div");
btns.forEach((v, k) => {
  v.addEventListener("click", () => {
    swiper.slideTo(k); // 0부터 시작하는 인덱스
  });
});

// con2;
// function updateBtn(swiper) {
//   const prevBtn = document.querySelector("#prev");
//   const nextBtn = document.querySelector("#next");
//   prevBtn.classList.toggle("disabled", swiper.isBeginning);
//   nextBtn.classList.toggle("disabled", swiper.isEnd);
// }
// const swiper1 = new Swiper(".mySwiper1", {
//   navigation: {
//     nextEl: "#next",
//     prevEl: "#prev",
//   },
//   on: {
//     init(swiper) {
//       updateBtn(swiper);
//     },
//     slideChange(swiper) {
//       updateBtn(swiper);
//     },
//   },
// });
// const btnPrev = document.querySelector("#prev");
// const pathPrev = btnPrev.querySelector(".btn_prev");
// const btnNext = document.querySelector("#next");
// const pathnext = btnNext.querySelector(".btn_next");
// btnPrev.addEventListener("mouseenter", () => {
//   pathPrev.setAttribute("d", "M 30 10 Q -10 65 30 140");
// });
// btnPrev.addEventListener("mouseleave", () => {
//   pathPrev.setAttribute("d", "M 30 10 Q 30 65 30 140");
// });
// btnNext.addEventListener("mouseenter", () => {
//   pathnext.setAttribute("d", "M 20 10 Q 60 65 20 140");
// });
// btnNext.addEventListener("mouseleave", () => {
//   pathnext.setAttribute("d", "M 20 10 Q 20 65 20 140");
// });
// const btns = document.querySelectorAll(".btn div");
// btns.forEach((v, k) => {
//   v.addEventListener("click", () => {
//     swiper.slideTo(k); // 0부터 시작하는 인덱스
//   });
// });
