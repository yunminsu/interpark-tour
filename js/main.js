// ScrollMagic
// const spyEls = document.querySelectorAll('.scroll-spy');
// spyEls.forEach(function (spyEl) {
//     new ScrollMagic.Scene({
//       triggerElement: spyEl,
//       triggerHook: 0.8
//     })
//     .setClassToggle(spyEl, 'show')
//     .addTo(new ScrollMagic.Controller());
// });

// 스크롤 시 navbar
const navbarEl = document.querySelector('header .scroll-navbar');

window.addEventListener('scroll', function() {
  console.log(window.scrollY);

  if (window.scrollY > 200) {
    navbarEl.style.display='block';
  } else {
    navbarEl.style.display='none';
  }
});

// 상단배너 닫기
const topbannerEl = document.querySelector('.top-banner');
const topbannerdeleteBtn = document.querySelector('.top-banner-delete');

topbannerdeleteBtn.addEventListener('click', function () {
    topbannerEl.classList.add('hide');
   });

// 메인서치 제목 나타냄
const fadeEl = document.querySelector('.main-section .fade');

  gsap.to (fadeEl, 3, {
    opacity: 1,
  });



// 배너 슬라이드
new Swiper('.main-section .swiper', {
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

// 투어특가 슬라이드
new Swiper('.toursale .swiper', {
  loop: true,
  disableOnInteraction: false,
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    }
  },
  pagination: {
    el: '.toursale .swiper-pagination',
    clickable: true,
  },
  navigation: {
  nextEl: '.swiper .swiper-button-next',
  prevEl: '.swiper .swiper-button-prev'
  }
});
