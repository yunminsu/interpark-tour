// ScrollMagic
const spyEls = document.querySelectorAll('.scroll-spy');
spyEls.forEach(function (spyEl) {
    new ScrollMagic.Scene({
      triggerElement: spyEl,
      triggerHook: 0.8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});

// 배너 슬라이드
new Swiper('.swiper', {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false // 클릭되어도 자동 재생
  },
  slidesPerView: 1.1,
  pagination: {
    el: '.swiper .swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },
  navigation: {
  nextEl: '.swiper .swiper-button-next',
  prevEl: '.swiper .swiper-button-prev'
  }
});

