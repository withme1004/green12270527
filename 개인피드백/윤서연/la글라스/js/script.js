const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".listinli");
const submenus = document.querySelectorAll(".listinul");
const bg = document.querySelector(".bg");
const bgimgs = document.querySelectorAll(".bg > div");
const bgDiv = document.querySelectorAll(".bg>div");
let closeTimer = null;
function myfnc() {
  submenus.forEach(function (v, k) {
    v.classList.remove("on");
  });
  bgDiv.forEach(function (v, k) {
    v.classList.remove("on");
  });
}
menuItems.forEach(function (v, k) {
  v.onmouseenter = function () {
    myfnc();
    this.querySelector(".listinul").classList.add("on");
    document.querySelector(".subBg").classList.add("on");
    document.querySelector("nav").classList.add("on");
    document.querySelector(".bg").classList.add("on");
    bgDiv[k].classList.add("on");
  };
  v.onmouseleave = function () {
    myfnc();
    this.querySelector(".listinul").classList.remove("on");
    document.querySelector(".subBg").classList.remove("on");
    document.querySelector("nav").classList.remove("on");
    document.querySelector(".bg").classList.remove("on");
    bgDiv[k].classList.remove("on");
  };
});
// menu.addEventListener("mouseenter", () => {
//   clearTimeout(closeTimer);
// });

// menu.addEventListener("mouseleave", () => {
//   closeTimer = setTimeout(() => {
//     submenus.forEach((ul) => ul.classList.remove("on"));
//     bg.classList.remove("on");
//     bgimgs.forEach((bgimg) => bgimg.classList.remove("on"));
//   }, 100);
// });

// menuItems.forEach((item, index) => {
//   const submenu = item.querySelector(".listinul");

//   item.addEventListener("mouseenter", () => {
//     clearTimeout(closeTimer);
//     submenus.forEach((ul) => ul.classList.remove("on"));
//     submenu.classList.add("on");

//     bg.classList.add("on");
//     bgimgs.forEach((bgimg) => bgimg.classList.remove("on"));
//     if (bgimgs[index]) {
//       bgimgs[index].classList.add("on");
//     }
//   });
// });

const slides = document.querySelector(".banner");
const slideItems = document.querySelectorAll(".banner > div");
const totalSlides = slideItems.length;
let currentIndex = 0;
let isTransitioning = false;

function goToSlide(index) {
  isTransitioning = true;
  slides.style.transition = "transform 1.3s ease";
  slides.style.transform = `translateX(-${100 * index}vw)`;

  document
    .querySelectorAll(".bannertxt")
    .forEach((el) => el.classList.remove("on"));

  setTimeout(() => {
    const currentSlide = slideItems[index];
    const txt = currentSlide.querySelector(".bannertxt");
    if (txt) txt.classList.add("on");
    isTransitioning = false;
  }, 1300);
}

function jumpToRealStart() {
  slides.style.transition = "none";
  slides.style.transform = `translateX(0vw)`;
  currentIndex = 0;

  document
    .querySelectorAll(".bannertxt")
    .forEach((el) => el.classList.remove("on"));
  const firstSlide = slideItems[0];
  const txt = firstSlide.querySelector(".bannertxt");
  if (txt) txt.classList.add("on");
}

window.addEventListener("load", () => {
  goToSlide(0);
});

setInterval(() => {
  if (isTransitioning) return;

  currentIndex++;
  goToSlide(currentIndex);

  if (currentIndex === totalSlides - 1) {
    setTimeout(() => {
      jumpToRealStart();
    }, 1300);
  }
}, 4300);
