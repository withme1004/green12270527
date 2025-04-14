// script.js
function loadAlert() {
  alert("Test!");
}
let nav = document.querySelector(".nav");
let gnbL = document.querySelector(".left").querySelectorAll(".one_dep");
let sub = document.querySelector(".left").querySelectorAll(".two_dep");

gnbL.forEach(function (v, k) {
  v.onmouseenter = function () {
    document.querySelector(".logo").style.display = "none";
    let span = v
      .querySelector("div")
      .querySelector("a")
      .querySelectorAll("span");
    span[0].style.display = "none";
    span[1].style.display = "block";
    document.querySelector(".nav").style.height = "180px";
    sub.forEach(function (v, k) {
      v.classList.add("on");
    });
  };
  v.onmouseleave = function () {
    document.querySelector(".logo").style.display = "block";
    let span = v
      .querySelector("div")
      .querySelector("a")
      .querySelectorAll("span");
    span[0].style.display = "block";
    span[1].style.display = "none";
    document.querySelector(".nav").style.height = "0";
    sub.forEach(function (v, k) {
      v.classList.remove("on");
    });
  };
});
// let span = gnbL.querySelectorAll("span");
// span[1].style.display = "none";
// * con2 *
var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
let a = document.querySelectorAll(".con2 .down .left a");
let lir = document.querySelectorAll(".con2 .down .right li");
let vid = document.querySelectorAll(".con2 .down .center video");

// a[0].classList.add("on");
// lir[0].classList.add("on");
// vid[0].classList.add("on");

function myr() {
  a.forEach(function (v, k) {
    v.classList.remove("on");
    lir.forEach(function (v, k) {
      v.classList.remove("on");
    });
    vid.forEach(function (v, k) {
      v.classList.remove("on");
    });
  });
}

a.forEach(function (v, k) {
  v.onclick = function (event) {
    event.preventDefault();
    myr();
    a[k].classList.add("on");
    lir[k].classList.add("on");
    vid[k].classList.add("on");
  };
});

// * con3 *
var swiper1 = new Swiper(".mySwiper1", {
  slidesPerView: "auto",
  spaceBetween: 30,
  centeredSlides: true,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// * con4 *
