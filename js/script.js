document.addEventListener("DOMContentLoaded", () => {
  //Прелоадер
  const preloader = () => {
    let preloader = document.querySelector(".preloader");
    setTimeout(() => {
      preloader.classList.add("off");
      setTimeout(() => {
        document.body.removeChild(preloader);
      }, 500);
    }, 1000);
  };
  //Меню header
  const toggleMenu = () => {
    let body = document.querySelector("body");
    let header = document.querySelector(".header");
    header.addEventListener("click", (e) => {
      let target = e.target;
      if (target.closest(".header__burger")) {
        header.classList.toggle("active");
        body.classList.toggle("offscroll");
      }
    });
  };
  //АККОРДЕОН
  const accordion = () => {
    const tabWrapper = document.querySelector(".answer"),
      tabItem = document.querySelectorAll(".answer__item");
    //Клик по табу
    tabWrapper.addEventListener("click", (e) => {
      const target = e.target.closest(".answer__item");
      if (target) {
        if (target.classList.contains("active")) {
          target.classList.remove("active");
        } else {
          tabItem.forEach((el) => {
            el.classList.remove("active");
          });
          target.classList.add("active");
        }
      }
    });

    //Нажатие клавиши над табом
    tabItem.forEach((item) => {
      item.addEventListener("keydown", (e) => {
        if (e.keyCode === 13) {
          if (item.classList.contains("active")) {
            item.classList.remove("active");
          } else {
            tabItem.forEach((el) => {
              el.classList.remove("active");
            });
            item.classList.add("active");
          }
        }
      });
    });
  };
  //Слайдер с отзывами
  const slider = () => {
    const sliderList = document.querySelector(".reviews__slider-list"),
      slides = document.querySelectorAll(".reviews__slide"),
      sliderDots = document.querySelectorAll(".dot"),
      slidePrevBtn = document.querySelector(".reviews__slide-prev"),
      slideNextBtn = document.querySelector(".reviews__slide-next");
    let count = 0;
    const positionSlider = () => {
      sliderList.style.transform = `translateX(-${
        count * sliderList.getBoundingClientRect().width
      }px)`;
    };
    window.addEventListener("resize", positionSlider);
    const prevSlide = () => {
      if (count > 0) {
        count--;
        positionSlider();
        sliderDots.forEach((dot) => {
          dot.classList.remove("active");
        });
        sliderDots[count].classList.add("active");
        slideNextBtn.classList.remove("enable");
        if (count == 0) {
          slidePrevBtn.classList.add("enable");
        }
      } else {
        count = 0;
      }
    };
    const nextSlide = () => {
      if (count < slides.length - 1) {
        count++;
        positionSlider();
        sliderDots.forEach((dot) => {
          dot.classList.remove("active");
        });
        sliderDots[count].classList.add("active");
        slidePrevBtn.classList.remove("enable");
        if (count == slides.length - 1) {
          slideNextBtn.classList.add("enable");
        }
      } else {
        count = slides.length - 1;
      }
    };

    slidePrevBtn.addEventListener("click", prevSlide);
    slideNextBtn.addEventListener("click", nextSlide);
    sliderDots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        count = i;
        positionSlider();
        sliderDots.forEach((dot) => {
          dot.classList.remove("active");
        });
        sliderDots[count].classList.add("active");
        if (i == 0) {
          slidePrevBtn.classList.add("enable");
        } else {
          slidePrevBtn.classList.remove("enable");
        }
        if (i == slides.length - 1) {
          slideNextBtn.classList.add("enable");
        } else {
          slideNextBtn.classList.remove("enable");
        }
      });
    });
  };
  //Убираю фокус по клику
  const offFocus = () => {
    document.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.closest("a")) {
        e.target.closest("a").blur();
      }
    });
  };
  //Анимации при скролле
  const scrollAnimation = () => {
    let fadeTop = document.querySelectorAll('[data-anim="fade-top"'),
      fadeRight = document.querySelectorAll('[data-anim="fade-right"'),
      fadeLeft = document.querySelectorAll('[data-anim="fade-left"'),
      fadeCenter = document.querySelectorAll('[data-anim="fade-center"');
    fadeTop.forEach((item) => {
      item.style.transform = "translateY(-50%)";
      item.style.opacity = "0";
    });
    fadeRight.forEach((item) => {
      item.style.transform = "translateX(50%)";
      item.style.opacity = "0";
    });
    fadeLeft.forEach((item) => {
      item.style.transform = "translateX(-50%)";
      item.style.opacity = "0";
    });
    fadeCenter.forEach((item) => {
      item.style.opacity = "0";
    });
    const startScrollAnimation = () => {
      let windowScroll = window.scrollY,
        windowVis = window.innerHeight / 2 + windowScroll,
        windowWidth = window.innerWidth;
      fadeTop.forEach((item) => {
        if (windowVis >= item.offsetTop) {
          if (windowWidth > 767 && item.getAttribute("data-delay")) {
            setInterval(() => {
              item.removeAttribute("style");
            }, item.getAttribute("data-delay"));
          } else item.removeAttribute("style");
        }
      });
      fadeLeft.forEach((item) => {
        if (windowVis >= item.offsetTop) {
          if (windowWidth > 767 && item.getAttribute("data-delay")) {
            setInterval(() => {
              item.removeAttribute("style");
            }, item.getAttribute("data-delay"));
          } else item.removeAttribute("style");
        }
      });
      fadeRight.forEach((item) => {
        if (windowVis >= item.offsetTop) {
          if (windowWidth > 767 && item.getAttribute("data-delay")) {
            setInterval(() => {
              item.removeAttribute("style");
            }, item.getAttribute("data-delay"));
          } else item.removeAttribute("style");
        }
      });
      fadeCenter.forEach((item) => {
        if (windowVis >= item.offsetTop) {
          if (windowWidth > 767 && item.getAttribute("data-delay")) {
            setInterval(() => {
              item.removeAttribute("style");
            }, item.getAttribute("data-delay"));
          } else item.removeAttribute("style");
        }
      });
    };

    setTimeout(() => {
      startScrollAnimation();
      window.addEventListener("scroll", startScrollAnimation);
    }, 1100);
  };

  preloader();
  toggleMenu();
  accordion();
  slider();
  offFocus();
  scrollAnimation();
});
