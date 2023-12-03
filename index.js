import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

var typed = new Typed(".auto-type", {
    strings: ["Ментор", "Стартапер", "Front-End Разработчик"],
    typeSpeed: 50,
    showCursor: false,
    backSpeed: 40,
    startDelay: 1000,
})

var introSlide = new Swiper(".intro__slider", {
    grabCursor: true,
    spaceBetween: 15,
    pagination: {
      el: ".slider__pagination",
      clickable: true,
    },
  });

  document.addEventListener('mousemove', (e) => {
    const spotlight = document.getElementById('spotlight');
    spotlight.style.left = e.pageX + 'px';
    spotlight.style.top = e.pageY + 'px';
  });
  
  document.addEventListener('mouseenter', () => {
    const spotlight = document.getElementById('spotlight');
    spotlight.style.width = '300px';
    spotlight.style.height = '300px';
  });
  
  document.addEventListener('mouseleave', () => {
    const spotlight = document.getElementById('spotlight');
    spotlight.style.width = '300px';
    spotlight.style.height = '300px';
  });
  



// anime({
//     targets: '.function-based-values-demo .el',
//     left: function (el) {
//         return 350;
//     },
//     top: function (el) {
//         return 250;
//     },
//     scale: function (el, i, l) {
//         return anime.random(1, 1.1);
//     },
//     rotate: function () {
//         return anime.random(-360, 360);
//     },
//     borderRadius: function () {
//         return ['50%', anime.random(30, 50) + '%'];
//     },
//     duration: function () {
//         return anime.random(1200, 1800);
//     },
//     delay: function () {
//         return anime.random(0, 400);
//     },
//     direction: 'alternate',
//     loop: false,
// });
