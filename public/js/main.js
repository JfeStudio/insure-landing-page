const menuToggle = document.querySelector(".menu-hamburger");
const navigation = document.getElementById("navigation");
const menuIcon = document.querySelector(".bx-menu");

menuToggle.addEventListener("click", () => {
  const visability = navigation.getAttribute("data-visible");
  menuIcon.classList.toggle("bx-x");
  if (visability === "false") {
    navigation.setAttribute("data-visible", true);
  } else if (visability === "true") {
    navigation.setAttribute("data-visible", false);
  }
});

// scroll nav
const header = document.querySelector(".fixed");
window.addEventListener("scroll", () => {
  header.classList.toggle("header-fixed", this.scrollY > 80);
});
