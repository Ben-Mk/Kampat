//Variables
const humbergerBtn = document.querySelector(".humberger-icon");
const menuContainer = document.querySelector(".nav-bar");
const navigationBar = document.querySelector(".header");
const scrollWatcher = document.createElement("div");
const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const mess = document.getElementById("message");
const subject = document.getElementById("issue");

//Navigation Header
scrollWatcher.setAttribute("data-scroll-watcher", "");
navigationBar.before(scrollWatcher);
const navObserver = new IntersectionObserver((entries) => {
  navigationBar.classList.toggle("sticking", !entries[0].isIntersecting);
});

navObserver.observe(scrollWatcher);

//Humbergur Icon and Mobile Menu
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
    closeOnWindow();
  }
});

function closeOnWindow() {
  document.addEventListener("click", (e) => {
    if (!menuContainer.contains(e.target) && !humbergerBtn.contains(e.target)) {
      menuContainer.classList.remove("appear");
      menuContainer.classList.add("disappear");
      humbergerBtn.querySelector("i.fa-solid").classList.remove("fa-xmark");
      humbergerBtn.querySelector("i.fa-solid").classList.add("fa-bars");
    }
  });
}

function closeNav() {
  menuContainer.classList.remove("appear");
  menuContainer.classList.add("disappear");
  humbergerBtn.querySelector("i.fa-solid").classList.remove("fa-xmark");
  humbergerBtn.querySelector("i.fa-solid").classList.add("fa-bars");
}

//Email Function
function sendEmail() {
  const bodyMessage = `Name: ${fullName.value}<br> Email: ${email.value} <br> Phone Number: ${phone.value} <br> Message: ${mess.value}`;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "benmk300@gmail.com",
    Password: "27E2F1ABC6F344BC500B2BD4712FF796666E",
    To: "benmk300@gmail.com",
    From: "benmk300@gmail.com",
    Subject: subject.value,
    Body: bodyMessage,
  }).then((message) => alert(message));
}

//Recaptch Functionality
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const captchaResponse = grecaptcha.getResponse();
  if (!captchaResponse.length > 0) {
    throw new Error("Captch not complete");
  }
  sendEmail();
});
