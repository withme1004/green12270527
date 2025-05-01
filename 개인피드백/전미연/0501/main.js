for (let i = 0; i < 100; i++) {
  const star = document.createElement("div");
  star.className = "star";
  star.style.top = `${Math.random() * 100}%`;
  star.style.left = `${Math.random() * 100}%`;
  star.style.animationDuration = `${1 + Math.random() * 2}s`;
  document.getElementById("star").appendChild(star);
}

// 별똥별 이벤트
const imageSrc = "./img/shooting-star.png";
const numStars = 3; // 동시에 몇 개 만들지 설정

function createShootingStar() {
  const star = document.createElement("img");
  star.src = imageSrc;
  star.className = "shooting-star";

  // 무작위 크기
  const size = Math.random() * 50 + 150;
  star.style.width = `${size}px`;

  // 무작위 시작 높이
  const top = Math.random();
  star.style.top = `${top}%`;

  // 무작위 애니메이션 속도
  const duration = Math.random() * 3 + 3;
  star.style.animation = `shoot ${duration}s linear`;

  // 시작 위치
  star.style.right = `-150px`;

  document.getElementById("shootingCanvas").appendChild(star);

  // 애니메이션 끝나면 제거
  star.addEventListener("animationend", () => {
    star.remove();
  });
}

// 일정 시간마다 새 별똥별 생성
setInterval(() => {
  createShootingStar();
}, 2000); // 1초 간격으로 새 별 생성

//우측 슬라이드 메뉴
const toggle = document.querySelector(".menu-toggle");
const sideMenu = document.querySelector(".side-menu");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("open");
  sideMenu.classList.toggle("open");
});

//로켓 마우스 이벤트
const canvas = document.getElementById("roket");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const rocketImg = new Image();
rocketImg.src = "./img/roket.png";

let mouse = { x: canvas.width / 2, y: canvas.height / 2 };
let rocket = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  angle: 0,
};

const particles = [];
let isMoving = false;
let lastMoveTime = Date.now();

document.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
  isMoving = true;
  lastMoveTime = Date.now();
});

function checkMouseIdle() {
  const now = Date.now();
  if (now - lastMoveTime > 500) {
    // 마우스 멈춘 지 0.5초 이상이면
    isMoving = false;
  }
}

function createParticles(x, y) {
  for (let i = 0; i < 5; i++) {
    particles.push({
      x: x,
      y: y,
      vx: (Math.random() - 0.5) * 1.5,
      vy: Math.random() * 2 + 1,
      size: Math.random() * 2 + 1,
      alpha: 1,
      color: `rgba(255, ${Math.floor(Math.random() * 100 + 100)}, 0,`,
    });
  }
}

function updateParticles() {
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.alpha -= 0.02;
    if (p.alpha <= 0) {
      particles.splice(i, 1);
    } else {
      ctx.beginPath();
      ctx.fillStyle = p.color + p.alpha + ")";
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  rocket.x += (mouse.x - rocket.x) * 0.1;
  rocket.y += (mouse.y - rocket.y) * 0.1;

  checkMouseIdle();

  if (isMoving) {
    const flameOffset = 0;
    const flameX = rocket.x - Math.cos(rocket.angle) * flameOffset;
    const flameY = rocket.y - Math.sin(rocket.angle) * flameOffset;
    createParticles(flameX, flameY);
  }

  updateParticles();

  // 로켓 그리기
  const rocketWidth = 100;
  const rocketHeight = 60;
  ctx.save();
  ctx.translate(rocket.x, rocket.y);
  ctx.rotate(rocket.angle);
  ctx.drawImage(
    rocketImg,
    -rocketWidth / 2,
    -rocketHeight / 2,
    rocketWidth,
    rocketHeight
  );
  ctx.restore();

  requestAnimationFrame(animate);
}

rocketImg.onload = () => {
  animate();
};

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

//서브메뉴 후버시 영어>한글로 변경
let subMenu = document.querySelectorAll(".submenu");
let gnb = document.querySelectorAll(".side-menu>ul>li");

gnb.forEach(function (item, keys) {
  item.addEventListener("mouseenter", function () {
    subMenu.forEach(function (v, k) {
      v.style.height = "300px";
    });

    this.querySelector("a .eng").style.display = "none";
    this.querySelector("a .kor").style.display = "block";
  });
  item.addEventListener("mouseleave", function () {
    subMenu.forEach(function (v, k) {
      v.style.height = "0px";
    });

    this.querySelector("a .eng").style.display = "block";
    this.querySelector("a .kor").style.display = "none";
  });
});

//브랜드 아이덴티티 텍스트

const lines = document.querySelectorAll(".line");
let index = 0;

function showNextLine() {
  if (index < lines.length) {
    lines[index].classList.add("visible");
    index++;
    setTimeout(showNextLine, 1500);
  }
}

setTimeout(showNextLine, 1000);
