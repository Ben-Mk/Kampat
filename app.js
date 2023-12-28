console.log("hello");
const humbergerBtn = document.querySelector(".humberger-icon");
const menuContainer = document.querySelector(".nav-bar");
const navigationBar = document.querySelector(".header");
const scrollWatcher = document.createElement("div");

//Navigation Header
scrollWatcher.setAttribute("data-scroll-watcher", "");
navigationBar.before(scrollWatcher);
const navObserver = new IntersectionObserver((entries) => {
  navigationBar.classList.toggle("sticking", !entries[0].isIntersecting);
});

navObserver.observe(scrollWatcher);

//Humbergur Icon and Mobile Menu
window.addEventListener("click", (e) => {
  if (e.target === document.querySelector("body")) {
    menuContainer.style.display = "none";
  }
});

humbergerBtn.addEventListener("click", (e) => {
  if (menuContainer.classList.contains("appear")) {
    menuContainer.classList.remove("appear");
    menuContainer.classList.add("disappear");
    humbergerBtn.querySelector("i.fa-solid").classList.remove("fa-xmark");
    humbergerBtn.querySelector("i.fa-solid").classList.add("fa-bars");
  } else {
    menuContainer.classList.remove("disappear");
    menuContainer.classList.add("appear");
    humbergerBtn.querySelector("i.fa-solid").classList.add("fa-xmark");
    humbergerBtn.querySelector("i.fa-solid").classList.remove("fa-bars");
  }
});