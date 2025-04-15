let ht = document.documentElement.scrollTop;
let header = document.querySelector('header');

window.addEventListener('wheel', function (e) {
  let delta = e.deltaY;
  console.log(delta);
  // 아래 + , 위 -
  if (delta > 0) {
    header.style.transform = 'translateY(-200px)'
  } else{
    header.style.transform = 'translateY(0)'
  }
})