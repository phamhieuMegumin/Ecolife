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
const navBar = document.querySelector(".header-main");
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) navBar.classList.add("active-drop");
  else navBar.classList.remove("active-drop");
});
const scrollToTop = document.querySelector(".scroll__to-top");
window.addEventListener("scroll", () => {
  scrollToTop.classList.toggle("active", window.scrollY > 1000);
});
scrollToTop.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
const loading = document.querySelector(".layout__loading");
const category = document.querySelectorAll(".add__loading");
category.forEach((item) => {
  item.addEventListener("click", () => {
    loading.classList.add("active");
    setTimeout(() => {
      loading.classList.remove("active");
    }, 1000);
  });
});
