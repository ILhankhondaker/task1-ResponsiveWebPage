const burger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active");
});
