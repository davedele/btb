(function() {
  function initCustomSwiper() {
    var el = document.querySelector('.swiper');
    if (!el) return;

    // Destroy existing instance if any
    if (el.swiper) {
      el.swiper.destroy(true, true);
    }

    new Swiper('.swiper', {
      autoplay: {
        delay: 8000,
        disableOnInteraction: false
      },
      rewind: true,
      speed: 1000,

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      on: {
        slideChangeTransitionEnd: function () {
          var active = this.slides[this.activeIndex];
          if (!active) return;
          var video = active.querySelector('video');
          if (video) {
            video.currentTime = 0;
            video.play().catch(function() {});
          }
        }
      }
    });
  }

  // Expose globally so TemplateReinit can call it on route changes
  window.initCustomSwiper = initCustomSwiper;

  // Wait for Swiper library to be available, then init
  function waitAndInit() {
    if (typeof Swiper !== 'undefined') {
      initCustomSwiper();
    } else {
      setTimeout(waitAndInit, 100);
    }
  }
  waitAndInit();
})();
