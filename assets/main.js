const listItems = document.querySelectorAll(".header__drop-menu");
document
  .querySelectorAll(".header-top__item-main--drop")
  .forEach((item, index) => {
    item.addEventListener("click", () => {
      const listItems = document.querySelectorAll(".header__drop-menu");
      listItems.forEach((item, index1) => {
        if (index1 == index) {
          item.classList.toggle("active");
        } else {
          item.classList.remove("active");
        }
      });
    });
  });
document.querySelector(".header-main").addEventListener("click", () => {
  listItems.forEach((item) => {
    item.classList.remove("active");
  });
});
new Swiper(".swiper-container", {
  spaceBetween: 30,
  effect: "fade",
  autoplay: {
    delay: 4000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
const navBar = document.querySelector(".header-main");
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) navBar.classList.add("active-drop");
  else navBar.classList.remove("active-drop");
});
new Swiper(".swiper-container--2", {
  slidesPerView: 5,
  spaceBetween: 30,
  navigation: {
    nextEl: ".btn__next-type-2",
    prevEl: ".btn__prev-type-2",
  },
});
new Swiper(".swiper-container--3", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".btn__next-type-3",
    prevEl: ".btn__prev-type-3",
  },
});
new Swiper(".swiper-container--4", {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".btn__next-type-4",
    prevEl: ".btn__prev-type-4",
  },
});
new Swiper(".swiper-container--5", {
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: ".btn__next-type-5",
    prevEl: ".btn__prev-type-5",
  },
});
new Swiper(".swiper-container--6", {
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: ".btn__next-type-6",
    prevEl: ".btn__prev-type-6",
  },
});
new Swiper(".swiper-container--7", {
  slidesPerView: 6,
  spaceBetween: 30,
  navigation: {
    nextEl: ".btn__next-type-7",
    prevEl: ".btn__prev-type-7",
  },
});
setTimeout(() => {
  document.querySelector(".loading").style.display = "none";
  document.querySelector(".swiper-container--7").style.visibility = "visible";
}, 2000);
