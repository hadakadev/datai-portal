(() => {
  const e = window.innerWidth < 700,
    t = document.querySelector(".socials h2");
  if (t) {
    const e = t.textContent,
      n = e.slice(-1);
    t.innerHTML = e.slice(0, -1) + `<span class="pink">${n}</span>`;
  }
  function n(t, n, i) {
    return {
      slidesPerView: e ? 1.2 : 4,
      centeredSlides: e,
      grid: { rows: 2 },
      spaceBetween: 20,
      navigation: { nextEl: n, prevEl: i },
    };
  }
  if (
    (navigator.userAgent.includes("Safari") &&
      !navigator.userAgent.includes("Chrome") &&
      document.querySelectorAll(".section-2 .item .img-wrap").forEach((e) => {
        e.classList.add("is-safari");
      }),
    document.addEventListener("DOMContentLoaded", function () {
      window.addEventListener("load", () => {
        const e = document.getElementById("preloader"),
          t = Array.from(
            document.querySelectorAll("#preloader .preloader-pixels .cell")
          );
        function n(e) {
          for (let t = e.length - 1; t > 0; t--) {
            const n = Math.floor(Math.random() * (t + 1));
            [e[t], e[n]] = [e[n], e[t]];
          }
          return e;
        }
        function i() {
          const i = n([...t]);
          i.forEach((t, n) => {
            setTimeout(() => {
              t.classList.remove("black"),
                n === i.length - 1 && e.classList.add("faded");
            }, 5 * n);
          });
        }
        e &&
          setTimeout(() => {
            !(function () {
              const o = n([...t]);
              o.forEach((t, n) => {
                setTimeout(() => {
                  t.classList.add("black"),
                    n === o.length - 1 &&
                      (e.classList.add("fade-out"), setTimeout(i));
                }, 5 * n);
              });
            })();
          }, 500);
      });
      const e = () => {
        document.querySelectorAll("h2:not(.custom-indent)").forEach((e) => {
          const t = e.querySelector(".subheading");
          if (t) {
            e.style.textIndent = "0";
            const n = t.offsetWidth + 20;
            (e.style.textIndent = `${n + 1}px`), (t.style.left = `-${n}px`);
          }
        });
      };
      e(), window.addEventListener("resize", e);
      const t = document.querySelector(".splitted");
      if (t) {
        const e = t.innerHTML.split("<br>");
        t.innerHTML = e.map((e) => `<span>${e.trim()}</span>`).join("");
      }
      const n = document.querySelector(".use-cases__inner");
      if (n) {
        n.scrollWidth > n.clientWidth && n.classList.add("scrolling");
        const e = () => {
          const e = n.scrollWidth - n.clientWidth;
          n.style.setProperty("--scroll-distance", `${e}px`);
        };
        e(), window.addEventListener("resize", e);
      }
      document.querySelector(".infrastructure__inner") &&
        (c(), window.addEventListener("resize", c));
      const i = document.querySelector(".bg-video.mobile-only");
      window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
        (Array.from(i.getElementsByTagName("source")).forEach((e) => {
          e.removeAttribute("src");
        }),
        i.load());
    }),
    new Swiper(".section-8 .swiper-container", {
      slidesPerView: 1,
      loop: !1,
      effect: "coverflow",
      grabCursor: !0,
      centeredSlides: !0,
      spaceBetween: 0,
      coverflowEffect: {
        rotate: 0,
        stretch: e ? 70 : 700,
        depth: e ? 35 : 350,
        modifier: 1,
        slideShadows: !1,
      },
      pagination: { el: ".swiper-pagination", type: "fraction" },
      navigation: {
        nextEl: ".section-8 .swiper-button-next",
        prevEl: ".section-8 .swiper-button-prev",
      },
    }),
    new Swiper(".section-9 .swiper-container", {
      slidesPerView: e ? 1.2 : 3,
      centeredSlides: e,
      spaceBetween: 20,
      navigation: {
        nextEl: ".section-9 .swiper-button-next",
        prevEl: ".section-9 .swiper-button-prev",
      },
    }),
    new Swiper(".leadership", {
      slidesPerView: e ? 1.2 : 4,
      spaceBetween: 20,
      centeredSlides: e,
      pagination: { el: ".swiper-pagination", clickable: !0 },
      navigation: {
        nextEl: ".leadership .swiper-button-next",
        prevEl: ".leadership .swiper-button-prev",
      },
    }),
    new Swiper(".advisory", {
      slidesPerView: e ? 1.2 : 4,
      spaceBetween: 20,
      centeredSlides: e,
      pagination: { el: ".swiper-pagination", clickable: !0 },
      navigation: {
        nextEl: ".advisory .swiper-button-next",
        prevEl: ".advisory .swiper-button-prev",
      },
    }),
    new Swiper(
      ".trusted-by",
      n(
        0,
        ".section-7__slider-wrap-2 .swiper-button-next",
        ".section-7__slider-wrap-2 .swiper-button-prev"
      )
    ),
    new Swiper(
      ".backers",
      n(
        0,
        ".section-7__slider-wrap-3 .swiper-button-next",
        ".section-7__slider-wrap-3 .swiper-button-prev"
      )
    ),
    document.querySelectorAll(".faq-item").forEach(function (e) {
      e.addEventListener("click", function () {
        this.classList.toggle("active");
      });
    }),
    document.querySelectorAll(".hide-bio").forEach(function (e) {
      e.addEventListener("click", function () {
        const e = this.closest(".bio");
        e && e.classList.remove("active");
      });
    }),
    document.querySelectorAll(".bio-trigger").forEach(function (e) {
      e.addEventListener("click", function () {
        const e = this.closest(".swiper-slide");
        if (e) {
          const t = e.querySelector(".bio");
          t &&
            (document.querySelectorAll(".swiper-slide .bio").forEach((e) => {
              e.classList.remove("active");
            }),
            t.classList.add("active"));
        }
      });
    }),
    e)
  ) {
    document.querySelectorAll("h2:not(.splitted)").forEach((e) => {
      e.innerHTML = e.innerHTML.replace(/<br\s*\/?>/gi, "");
    }),
      document.querySelector(".menu-trigger").addEventListener("click", l),
      document
        .querySelectorAll(
          ".mobile-navigation__inner .menu-item:not(.menu-item-has-children)"
        )
        .forEach((e) => {
          e.addEventListener("click", l);
        }),
      document
        .querySelector(".mobile-navigation__inner .menu-item-has-children")
        .addEventListener("click", function (e) {
          this.classList.toggle("active");
        }),
      new Swiper(".section-3__inner", {
        slidesPerView: 1.2,
        spaceBetween: 20,
        centeredSlides: !0,
      }),
      new Swiper(".page-template-page-home .cases", {
        slidesPerView: 1.2,
        spaceBetween: 20,
        centeredSlides: !0,
        navigation: {
          nextEl: ".section-cases .swiper-button-next",
          prevEl: ".section-cases .swiper-button-prev",
        },
      }),
      new Swiper(".section-2__benefits", {
        slidesPerView: 1.2,
        spaceBetween: 20,
        centeredSlides: !0,
      }),
      document.querySelectorAll(".description").forEach((e) => {
        e.querySelectorAll(".description__item").forEach((t) => {
          const n = t.offsetTop + t.offsetHeight - e.offsetTop - e.offsetHeight;
          if (n > 0) {
            const e = t.querySelector("p");
            (e.style.height = t.offsetHeight - n - 33 + "px"),
              (e.style.whiteSpace = "nowrap"),
              t.classList.add("is-overflowing");
          }
        });
      });
    const e = document.querySelector("#product");
    if (e) {
      const t = e.querySelectorAll(".content-item:not(:nth-child(4)) p"),
        n = e.querySelector(".lottie-wrap");
      window.addEventListener("scroll", function () {
        const e = window.innerHeight / 2;
        let i = !1;
        t.forEach((t) => {
          const n = t.getBoundingClientRect(),
            o = n.top + n.height / 2;
          o - e <= 30 && o - e > -150 && (i = !0);
        }),
          i ? n.classList.add("darken") : n.classList.remove("darken");
      });
    }
  }
  const i = document.querySelector(".leadership-trigger");
  i &&
    i.addEventListener("click", function () {
      document.querySelectorAll(".section-7__tabs .tab").forEach(function (e) {
        e.classList.remove("active");
      }),
        this.classList.add("active"),
        document.querySelectorAll(".team-slider").forEach(function (e) {
          e.classList.remove("active");
        }),
        document.querySelector(".leadership").classList.add("active");
    });
  const o = document.querySelector(".advisory-trigger");
  o &&
    o.addEventListener("click", function () {
      document.querySelectorAll(".section-7__tabs .tab").forEach(function (e) {
        e.classList.remove("active");
      }),
        this.classList.add("active"),
        document.querySelectorAll(".team-slider").forEach(function (e) {
          e.classList.remove("active");
        }),
        document.querySelector(".advisory").classList.add("active");
    });
  const r = document.getElementById("firstLottie");
  function s(e, t = !1) {
    var n;
    const i = e.querySelector("h4"),
      o =
        null !== (n = e.querySelector(".line")) && void 0 !== n
          ? n
          : e.closest(".infrastructure__inner").querySelector(".line"),
      r =
        i.getBoundingClientRect().top -
        e.getBoundingClientRect().top +
        i.getBoundingClientRect().height / 2;
    if (((o.style.top = `${r}px`), t)) {
      const e =
          document.querySelector(".item-1 h4").getBoundingClientRect().top +
          window.scrollY,
        t =
          document
            .querySelector(".infrastructure-item:last-child h4")
            .getBoundingClientRect().top + window.scrollY,
        n = Math.abs(t - e - 20);
      o.style.height = `${n}px`;
    }
  }
  function c() {
    const e = document.querySelector(".infrastructure-item.item-1"),
      t = document.querySelector(".infrastructure-item.item-2"),
      n = document.querySelector(".infrastructure-item.item-3");
    s(e, !0), s(t), s(n);
  }
  function l() {
    document.querySelector(".burger").classList.toggle("open"),
      document.querySelector(".site-header").classList.toggle("nav-active"),
      "hidden" === document.body.style.overflow
        ? (document.body.style.overflow = "auto")
        : (document.body.style.overflow = "hidden");
  }
  r &&
    r.addEventListener("ready", () => {
      LottieInteractivity.create({
        mode: "scroll",
        player: "#firstLottie",
        container: "#productLottieWrap",
        actions: [{ visibility: [0, 1], type: "seek", frames: [0, 48] }],
      });
    }),
    document.addEventListener("DOMContentLoaded", () => {});
})();
