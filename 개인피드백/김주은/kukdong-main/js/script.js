//---------------------------- nav 메인메뉴 ----------------------------
let nav = document.querySelector("nav");
let mainMenu = document.querySelector(".mainMenu");
let mainMenuLi = document.querySelectorAll(".mainMenu li");
let subMenu = document.querySelector(".subMenu");
let subMenuItem = document.querySelectorAll(".subMenuItem");

function addClass(k) {
  // 순서에 해당하는 sub메뉴 클래스 추가
  subMenuItem.forEach(function (item, index) {
    mainMenuLi[k].querySelector("a").classList.add("on");
    subMenuItem[k].classList.add("on");
  });
}

// 순서에 해당하는 sub메뉴 클래스 삭제
function rmClass() {
  subMenuItem.forEach(function (v, k) {
    mainMenuLi[k].querySelector("a").classList.remove("on");
    subMenuItem[k].classList.remove("on");
  });
}

// 메인메뉴 리스트에 마우스 올릴때마다
mainMenuLi.forEach(function (v, k) {
  v.onmouseenter = function () {
    rmClass();
    addClass(k);
    mainMenuLi[k].querySelector("a").classList.add("on");
  };
});

// mainMenu에서 mouseleave할때마다 subMenu도 사라져야 하지만
// subMenu에 mouseenter할때는 subMenu가 사라지면 안됨
mainMenu.addEventListener("mouseenter", function () {
  nav.classList.add("on");
});

mainMenu.addEventListener("mouseleave", function () {
  nav.classList.remove("on");

  subMenu.addEventListener("mouseenter", function () {
    nav.classList.add("on");
  });
  subMenu.addEventListener("mouseleave", function () {
    nav.classList.remove("on");
  });
});

//---------------------------- nav의 side버튼 클릭시 전체메뉴 띄우기 ----------------------------
let openBtn = document.getElementById("open");
let closeBtn = document.getElementById("close");
let allMenu = document.getElementById("allMenu");
let darkbg = document.querySelector(".darkbg");

openBtn.addEventListener("click", function () {
  allMenu.classList.add("on");
  darkbg.classList.add("on");
});

closeBtn.addEventListener("click", function () {
  allMenu.classList.remove("on");
  darkbg.classList.remove("on");
});

darkbg.addEventListener("click", function () {
  allMenu.classList.remove("on");
  darkbg.classList.remove("on");
});

//---------------------------- top버튼 ----------------------------
let topBtn = document.getElementById("topbtn");

topBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

window.addEventListener("scroll", () => {
  //스크롤을 할 때마다 로그로 현재 스크롤의 위치가 찍혀나온다.
  // console.log(window.scrollX, window.scrollY);
  let scY = window.scrollY;
  if (scY <= 50) {
    topBtn.style.transform = "translateX(100px)";
    topBtn.style.transition = ".5s";
  } else {
    topBtn.style.transform = "translateX(0)";
  }
});

//---------------------------- 메인슬라이드 ----------------------------
let slide = document.querySelectorAll("#visual .swiper-slide");
let txt = document.querySelectorAll("#visual .txt>div");
document.querySelector(".start").innerHTML = "1";
document.querySelector(".end").innerHTML = slide.length;

function myfuc() {
  slide.forEach(function (v, k) {
    v.querySelector("img").classList.remove("on");
  });
  txt.forEach(function (v, k) {
    v.classList.remove("on");
  });
}

var swiper = new Swiper(".mySwiper", {
  effect: "fade",
  speed: 1000,
  loop: true,
  autoplay: {
    delay: 9000,
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
  on: {
    slideChange: function () {
      myfuc();
      slide[this.realIndex].querySelector("img").classList.add("on");
      txt[this.realIndex].classList.add("on");
      document.querySelector(".start").innerHTML = this.realIndex + 1;
    },
  },
});

let autoplaying = true;
document.querySelector(".stop").onclick = function () {
  if (autoplaying) {
    swiper.autoplay.stop();
    this.classList.replace("stop", "play");
    this.innerHTML = "play_arrow";
  } else {
    swiper.autoplay.start();
    this.classList.replace("play", "stop");
    this.innerHTML = "pause";
  }
  autoplaying = !autoplaying;
};

// document.querySelector(".play").onclick = function () {
//   if (!autoplaying) {
//     swiper.autoplay.start();
//   }
//   autoplaying = true;
// };

//---------------------------- 포트폴리오 슬라이드 부분 ----------------------------
var swiper2 = new Swiper(".mySwiper2", {
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let upBtn = document.querySelectorAll("#upBtn button");
let downCon = document.querySelectorAll("#downCon .swiper2");

upBtn[0].classList.add("on");
downCon[0].classList.add("on");

function S2rmClass() {
  upBtn.forEach(function (v, k) {
    v.classList.remove("on");
  });

  downCon.forEach(function (v, k) {
    downCon[k].classList.remove("on");
  });
}

upBtn.forEach(function (v, k, allItem) {
  v.onclick = function () {
    S2rmClass();
    this.classList.add("on");

    downCon.forEach(function (item, index) {
      downCon[k].classList.add("on");
    });
  };
});
