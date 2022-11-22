const headerEl = document.querySelector(".header");
const btnNavEl = document.querySelector(".mobile-nav-btn");

btnNavEl.addEventListener("click", () => headerEl.classList.toggle("nav-open"));
