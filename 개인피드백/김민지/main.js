AOS.init({
  once: false,
  startEvent: "load",
});

$("#fullpage").fullpage({
  autoScrolling: true,
  navigation: true,
  onLeave: function (index, nextIndex, direction) {
    setTimeout(function () {
      var $currentSection = $(".section").eq(nextIndex - 1);
      var $aosElements = $currentSection.find("[data-aos]");

      $aosElements.each(function () {
        $(this).removeClass("aos-animate");
        void this.offsetWidth; // reflow 트릭
        $(this).addClass("aos-animate");
      });
    }, 100);
  },
});

let ht = document.querySelector(".con5 .right .storeimg li").offsetHeight;
console.log(ht);
document.querySelector(".con5 .right .storeimg").style.height = ht + "px";

// con5클릭이벤트,,,

// 첫번째 매장만 보이게 설정
document.querySelectorAll(".con5 .right .storeimg li")[0].classList.add("on");
document.querySelectorAll(".con5 .left .store li")[0].classList.add("on");
document.querySelectorAll(".con5 .right .storelist li")[0].classList.add("on");
// 리무브
function myremove() {
  document.querySelectorAll(".con5 .right .storeimg li").forEach(function (v) {
    v.classList.remove("on");
  });

  document.querySelectorAll(".con5 .left .store li").forEach(function (v) {
    v.classList.remove("on");
  });

  document.querySelectorAll(".con5 .right .storelist li").forEach(function (v) {
    v.classList.remove("on");
  });
}
// 동작시키기
let menuItems = document.querySelectorAll(".con5 .right .storelist li");
menuItems.forEach(function (el, idx) {
  el.addEventListener("click", function () {
    myremove(); // 모든 .on 제거
    document
      .querySelectorAll(".con5 .right .storeimg li")
      [idx].classList.add("on");
    document.querySelectorAll(".con5 .left .store li")[idx].classList.add("on");
    this.classList.add("on"); // 클릭된 메뉴에만 on
  });
});

let slide = document.querySelectorAll(".swiper-slide");
let txt = document.querySelectorAll(".txt>div");
slide[0].querySelector("img").classList.add("on");
// txt[0].querySelector("h1").classList.add("on");
document.querySelector(".start").innerHTML = "1";
document.querySelector(".end").innerHTML = slide.length;
function myfnc() {
  slide.forEach(function (v, k) {
    v.querySelector("img").classList.remove("on");
  });
  txt.forEach(function (v, k) {
    v.querySelector("h1").classList.remove("on");
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
      myfnc();
      slide[this.realIndex].querySelector("img").classList.add("on");
      txt[this.realIndex].querySelector("h1").classList.add("on");
      document.querySelector(".start").innerHTML = this.realIndex + 1;
    },
  },
});

let autoplaying = true;
document.querySelector(".stop").onclick = function () {
  if (autoplaying) {
    swiper.autoplay.stop();
  }
  autoplaying = false;
};
document.querySelector(".play").onclick = function () {
  if (!autoplaying) {
    swiper.autoplay.start();
  }
  autoplaying = true;
};
