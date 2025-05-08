let bgmenu = document.querySelectorAll(".main .bg-menu li");
let Bgvideo = document.querySelectorAll(".bg video");
let bgControl = document.querySelector("autoplay-progress");
let gnb = document.querySelectorAll(".menu>li");
let sub = document.querySelectorAll(".sub-menu");
let service = document.querySelectorAll(".service>li");
let navWrap = document.querySelector(".nav_wrap");
let navBg = document.querySelector(".navBg");
let BsnCon = document.querySelectorAll("#business>ul>li");
let BsnControl = document.querySelectorAll(".BsnControl");
let pressBtn = document.querySelector(".pressBtn");
let advertBtn = document.querySelector(".advertBtn");
let pressSwiper = document.querySelector(".mySwiper2");
let advertSwiper = document.querySelector(".mySwiper3");

bgmenu[0].querySelector("span").classList.add("on");
bgmenu[0].querySelector("a").classList.add("on");
pressSwiper.classList.add("on");

function down1() {
  bgmenu.forEach(function (v) {
    v.querySelector("span").classList.remove("on");
    v.querySelector("a").classList.remove("on");
  });
}
function down2() {
  BsnCon.forEach(function (v) {
    v.classList.remove("on");
  });
}

function PRSwiper() {
  pressBtn.classList.remove("on");
  advertBtn.classList.remove("on");
  pressSwiper.classList.remove("on");
  advertSwiper.classList.remove("on");
}

function resetVideo(index) {
  let video = Bgvideo[index];
  if (video) {
    video.currentTime = 0;
    video.play();
  }
}
//main swiper시작
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressText = document.querySelector(".autoplay-progress span");
const stopBtn = document.querySelector("#stop");
const videos = document.querySelectorAll(".swiper-slide video");
const bgbtn = document.querySelectorAll(".bgControl_nb span");
let savedTime = 7000;
let remainingTime = 7000;
let animationFrameId = null;
let progressStart = 0;
let resumeTimeout = null;
var mySwiper1 = new Swiper(".mySwiper1", {
  effect: "fade",
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  loop: true,

  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressText.textContent = `${Math.ceil(time / 1000)}s`;
      savedTime = time; // 남은 시간 계속 업데이트
    },
    slideChange() {
      bgbtn.forEach(function (btn) {
        btn.classList.remove("on");
      });
      bgbtn[this.realIndex].classList.add("on");
    },
  },
});

function animateProgress(startProgress, duration) {
  let start = null;

  function step(timestamp) {
    if (!start) start = timestamp;
    const elapsed = timestamp - start;
    const progress = Math.min(
      startProgress + (elapsed / duration) * (1 - startProgress),
      1
    );
    progressCircle.style.setProperty("--progress", progress);

    if (progress < 1) {
      animationFrameId = requestAnimationFrame(step);
    }
  }

  animationFrameId = requestAnimationFrame(step);
}

bgbtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    mySwiper1.slideTo(index);
    progressStart = parseFloat(
      getComputedStyle(progressCircle).getPropertyValue("0")
    );
    mySwiper1.autoplay.start();
    document.querySelector(".swiper-slide-active video").play();
    bgbtn.forEach(function (b) {
      b.classList.remove("on");
    });
    btn.classList.add("on");
    stopBtn.style.backgroundImage = "url(../imges/bg_control1.svg)";
  });
});

stopBtn.addEventListener("click", function () {
  let stopText = this.textContent.trim();
  if (stopText === "정지") {
    mySwiper1.autoplay.stop();
    remainingTime = savedTime;
    progressStart = parseFloat(
      getComputedStyle(progressCircle).getPropertyValue("--progress")
    );
    document.querySelector(".swiper-slide-active video")?.pause();
    this.textContent = "시작";
    clearTimeout(resumeTimeout);
    this.style.backgroundImage = "url(../imges/bg_control2.svg)";
    cancelAnimationFrame(animationFrameId);
  } else if (stopText === "시작") {
    animateProgress(progressStart, remainingTime);
    resumeTimeout = setTimeout(() => {
      mySwiper1.slideNext();
      setTimeout(() => {
        mySwiper1.autoplay.start();
        progressStart = 0;
      }, 50);
    }, remainingTime);
    document.querySelector(".swiper-slide-active video")?.play();
    this.textContent = "정지";
    this.style.backgroundImage = "url(../imges/bg_control1.svg)";
  }
});
//main swiper끝
/*document.querySelector(".Bgbtn1").addEventListener("click", () => {
  mySwiper1.slideTo(0);
  resetVideo(0);
});
document.querySelector(".Bgbtn2").addEventListener("click", () => {
  mySwiper1.slideTo(1);
  resetVideo(1);
});
document.querySelector(".Bgbtn3").addEventListener("click", () => {
  mySwiper1.slideTo(2);
  resetVideo(2);
});*/

bgmenu.forEach(function (v, k) {
  v.addEventListener("click", function () {
    down1();
    this.querySelector("span").classList.add("on");
    this.querySelector("a").classList.add("on");
  });

  v.onclick = function (e) {
    e.preventDefault();
    window.scrollTo({
      top: document.querySelector(`.content${k + 1}`).offsetTop,
      behavior: "smooth",
    });
  };
});

document.querySelector(".menu").onmouseenter = function () {
  gnb.forEach(function (v, k) {
    v.querySelector("a").classList.add("on");
    sub[k].classList.add("on");
    service.forEach(function (v) {
      v.classList.add("action");
    });
  });
  navBg.querySelectorAll("a").forEach(function (v) {
    v.classList.add("on");
  });
};

navWrap.onmouseleave = function () {
  navBg.classList.remove("on");
  document.querySelector(".nav").classList.remove("on");
  gnb.forEach(function (v, k) {
    v.querySelector("a").classList.remove("on");
    sub[k].classList.remove("on");
    service.forEach(function (v) {
      v.classList.remove("action");
    });
  });
  navBg.querySelectorAll("a").forEach(function (v) {
    v.classList.remove("on");
  });
};

gnb.forEach(function (v) {
  v.onmouseenter = function () {
    document.querySelector(".wrap .nav").classList.add("on");
    navBg.classList.add("on");
    document.querySelector(".logo img").src = "./imges/logo_over.svg";
  };
});

sub.forEach(function (v) {
  v.onmouseenter = function () {
    navBg.classList.add("on");
    document.querySelector(".nav").classList.add("on");
  };
});

service.forEach(function (v) {
  v.onclick = function () {
    v.classList.toggle("on");
    v.querySelector(".sv-list").classList.toggle("on");
    v.onmouseleave = function () {
      v.classList.remove("on");
      v.querySelector(".sv-list").classList.remove("on");
    };
  };
});

document.querySelectorAll(".closed").forEach(function (v) {
  v.onclick = function (e) {
    e.stopPropagation();
    down2();
    BsnPoster();
    document.querySelectorAll(".video_tit").forEach(function (value) {
      value.querySelector("p").classList.remove("on", "action");
      value.classList.remove("on");
    });
    BsnControl.forEach(function (v) {
      v.classList.remove("on");
    });
  };
});

function Menu_list() {
  document.querySelectorAll(".Menu_list li").forEach(function (v, k) {
    v.classList.remove("on");
  });
  document.querySelectorAll(".sub_list").forEach(function (v, k) {
    v.classList.remove("on");
  });
  document.querySelectorAll(".Menu_list li p").forEach(function (v) {
    v.classList.remove("on");
  });
}

document.querySelectorAll(".Menu_list li").forEach(function (v, k) {
  v.onclick = function () {
    const subList = v.querySelector(".sub_list");
    const subOpen = subList.classList.contains("on");
    Menu_list();
    this.classList.add("on");
    // 이미 열려 있던 메뉴를 눌렀다면 닫기 (== 아무것도 안 열기)
    if (!subOpen) {
      subList.classList.add("on");
      v.querySelector("p").classList.add("on");
    } else {
      subList.classList.remove("on");
      v.querySelector("p").classList.remove("on");
      this.classList.remove("on");
    }
  };
});

BsnCon.forEach(function (v, k) {
  v.addEventListener("click", function () {
    down2();
    BsnPoster();
    BsnCon[k].classList.add("on");
    const clickedVideo = v.querySelector("video");
    clickedVideo.play();

    document.querySelectorAll(".video_tit").forEach(function (value, key) {
      let BsntitP = value.querySelector("p");
      if (key !== k) {
        BsntitP.classList.add("on");
        BsntitP.classList.remove("action");
        value.classList.remove("on");
        BsnControl[key].classList.remove("on");
        value.querySelector("div").classList.remove("on");
      } else {
        BsntitP.classList.remove("on");
        BsntitP.classList.add("action");
        value.classList.add("on");
        BsnControl[key].classList.add("on");
        value.querySelector("div").classList.add("on");
      }
    });
  });
});

function BsnPoster() {
  BsnCon.forEach((item) => {
    const Bsnvideo = item.querySelector("video");
    Bsnvideo.pause();
    Bsnvideo.currentTime = 0;
    Bsnvideo.load();
  });
}

BsnControl.forEach(function (v, k) {
  v.addEventListener("click", function (e) {
    e.stopPropagation();
    const video = BsnCon[k].querySelector("video");
    if (video.paused) {
      video.play();
      v.querySelector("img").src = "./imges/bg_control1.svg";
    } else {
      video.pause();
      v.querySelector("img").src = "./imges/bg_control2.svg";
    }
  });
});

advertBtn.onclick = function (e) {
  e.preventDefault();
  PRSwiper();
  this.classList.add("on");
  advertSwiper.classList.add("on");
  mySwiper3.slideTo(0, 0);
};

pressBtn.onclick = function (e) {
  e.preventDefault();
  PRSwiper();
  this.classList.add("on");
  pressSwiper.classList.add("on");
  mySwiper2.slideTo(0, 0);
};

var mySwiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    1280: { slidesPerView: 3, spaceBetween: 30 },
    720: { slidesPerView: 2, spaceBetween: 20 },
  },
  keyboard: { enabled: true },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var mySwiper3 = new Swiper(".mySwiper3", {
  slidesPerView: 3,
  spaceBetween: 30,
  breakpoints: {
    720: { slidesPerView: 2, spaceBetween: 20 },
    1280: { slidesPerView: 3, spaceBetween: 30 },
  },
  keyboard: { enabled: true },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
function BgMenu() {
  bgmenu.forEach(function (v, k) {
    v.querySelector("span").classList.remove("on");
    v.querySelector("a").classList.remove("on");
  });
}
window.addEventListener("scroll", function (event) {
  BgMenu();
  let ht = document.documentElement.scrollTop;
  console.log(ht);
  if (ht >= 0 && ht < 900) {
    bgmenu.forEach(function (v, k) {
      bgmenu[0].querySelector("span").classList.add("on");
      bgmenu[0].querySelector("a").classList.add("on");
    });
  } else if (ht >= 900 && ht < 2180) {
    bgmenu.forEach(function (v, k) {
      bgmenu[1].querySelector("span").classList.add("on");
      bgmenu[1].querySelector("a").classList.add("on");
    });
  } else if (ht >= 2180 && ht < 5500) {
    bgmenu.forEach(function (v, k) {
      bgmenu[2].querySelector("span").classList.add("on");
      bgmenu[2].querySelector("a").classList.add("on");
    });
  } else if (ht >= 5500 && ht < 6770) {
    bgmenu.forEach(function (v, k) {
      bgmenu[3].querySelector("span").classList.add("on");
      bgmenu[3].querySelector("a").classList.add("on");
    });
  } else if (ht > 6770) {
    bgmenu.forEach(function (v, k) {
      bgmenu[4].querySelector("span").classList.add("on");
      bgmenu[4].querySelector("a").classList.add("on");
    });
  }
});
