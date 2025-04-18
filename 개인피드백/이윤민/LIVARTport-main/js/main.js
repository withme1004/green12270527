const boxes = document.querySelectorAll(".box");
const secLast = document.getElementById("secLast");
const total = boxes.length;
let currentIndex = 0;
let isAnimating = false;
const menu = document.querySelector("#menu");

// 인덱스 기반으로 가로 스크롤 이동
function scrollToIndex(index, callback) {
  const targetScrollLeft = index * window.innerWidth;
  window.scrollTo({
    left: targetScrollLeft,
    behavior: "smooth",
  });

  setTimeout(() => {
    if (callback) callback();
  }, 800);
}
let svg = document.querySelectorAll("#menu .title svg .cls-1");
function updateMenu(index) {
  if (index >= 2) {
    menu.classList.add("on");
    document.querySelector(".contact").classList.add("on");
    svg.forEach(function (v) {
      v.classList.add("on");
    });
  } else {
    menu.classList.remove("on");
    document.querySelector(".contact").classList.remove("on");
    svg.forEach(function (v) {
      v.classList.remove("on");
    });
  }
}

window.addEventListener(
  "wheel",
  function (e) {
    const delta = e.deltaY;
    const isScrollDown = delta > 0;

    // 마지막 섹션인 경우: 세로 스크롤 허용
    if (currentIndex === total - 1) {
      const scrollTop = secLast.scrollTop;
      const maxScrollTop = secLast.scrollHeight - secLast.offsetHeight;

      updateMenu(currentIndex);

      if (!isScrollDown && scrollTop <= 0) {
        // 맨 위에서 위로 스크롤하면 이전 섹션으로 이동
        e.preventDefault();
        if (isAnimating) return;
        currentIndex--;
        isAnimating = true;
        scrollToIndex(currentIndex, () => {
          isAnimating = false;
          updateMenu(currentIndex);
          showCurrentIndex();
        });
      }

      // 아래로 스크롤이거나 아직 최상단이 아니면 그냥 세로 스크롤
      return;
    }

    // 일반 섹션: 가로 이동 제어
    e.preventDefault();
    if (isAnimating) return;

    if (isScrollDown && currentIndex < total - 1) {
      currentIndex++;
    } else if (!isScrollDown && currentIndex > 0) {
      currentIndex--;
    } else {
      return;
    }

    isAnimating = true;
    scrollToIndex(currentIndex, () => {
      isAnimating = false;
      updateMenu(currentIndex);
      showCurrentIndex();
    });
  },
  { passive: false }
);
