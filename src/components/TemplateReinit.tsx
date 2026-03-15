"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function TemplateReinit() {
  const pathname = usePathname();

  useEffect(() => {
    // Wait for template scripts to load and DOM to settle after route change
    const timer = setTimeout(() => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const w = window as any;
      const $ = w.jQuery || w.$;
      if (!$) return;

      // Re-trigger WOW.js animations
      if (typeof w.WOW === "function") {
        new w.WOW().init();
      }

      // Re-init owl carousels
      try {
        $(".owl-carousel").each(function (this: HTMLElement) {
          const $el = $(this);
          if ($el.data("owl.carousel")) {
            $el.trigger("destroy.owl.carousel");
          }
        });

        $(".owl-single-dots").owlCarousel({
          loop: true,
          items: 1,
          dots: true,
          nav: false,
          autoplay: true,
          autoplayTimeout: 6000,
          smartSpeed: 500,
        });

        $(".owl-2-cols-center").owlCarousel({
          loop: true,
          center: true,
          items: 2,
          margin: 15,
          dots: false,
          nav: false,
          responsive: {
            0: { items: 1 },
            768: { items: 2 },
          },
        });
      } catch {
        // Owl carousel may not be loaded yet
      }

      // Re-init Swiper
      try {
        const swiperEl = document.querySelector(".swiper");
        if (swiperEl && typeof w.Swiper === "function") {
          new w.Swiper(".swiper", {
            loop: true,
            autoplay: { delay: 6000, disableOnInteraction: false },
            pagination: { el: ".swiper-pagination", clickable: true },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            speed: 1200,
          });
        }
      } catch {
        // Swiper may not be loaded yet
      }

      // Re-init accordion, tabs, progress bars, counters
      try {
        $(".accordion-section-title").off("click").on("click", function (this: HTMLElement, e: Event) {
          e.preventDefault();
          const $this = $(this);
          const target = $this.attr("data-tab");
          if (!target) return;

          if ($this.hasClass("active")) {
            $this.removeClass("active");
            $(target).slideUp(300);
          } else {
            $this.closest(".accordion-section").find(".accordion-section-title").removeClass("active");
            $this.closest(".accordion-section").find(".accordion-section-content").slideUp(300);
            $this.addClass("active");
            $(target).slideDown(300);
          }
        });

        $(".d-tab-nav li").off("click").on("click", function (this: HTMLElement) {
          const $this = $(this);
          const idx = $this.index();
          $this.addClass("active-tab").siblings().removeClass("active-tab");
          $this.closest(".de-tab").find(".d-tab-content > li").eq(idx).show().siblings().hide();
        });

        $(".progress-bar").each(function (this: HTMLElement) {
          const $bar = $(this);
          const val = $bar.attr("data-value");
          if (val) {
            $bar.css("width", val);
            $bar.prev(".value").text(val);
          }
        });

        $(".timer").each(function (this: HTMLElement) {
          const $el = $(this);
          const to = parseInt($el.attr("data-to") || "0", 10);
          $el.text(to.toLocaleString());
        });

        $(document).trigger("scroll");
      } catch {
        // Template JS functions may not be available
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
