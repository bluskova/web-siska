const menuIconContainer = document.querySelector(".menu-icon-container");
const navigation = document.querySelector("header nav");
const logo = document.querySelector("header .logo-container");
const logoImg = document.getElementById("img-logo");
const r = document.querySelector(":root");

// inicialization
let hiddenNav = true;

// function which open navigation
const openNav = () => {
  navigation.classList.add("display-block");
  menuIconContainer.classList.add("open");
  hiddenNav = false;
};

// function which close navigation
const closeNav = () => {
  navigation.classList.remove("display-block");
  menuIconContainer.classList.remove("open");
  hiddenNav = true;
};

// open and close navigation
menuIconContainer.addEventListener("click", (event) => {
  event.stopPropagation();
  hiddenNav ? openNav() : closeNav();
});

// close the navigation after click anywhere (include 'navLinks', exclude 'menuIcon')
document.addEventListener("click", (event) => {
  if (!hiddenNav && !menuIconContainer.contains(event.target)) {
    closeNav();
  }
});

// close the navigation after click 'Escape'
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !hiddenNav) {
    closeNav();
  }
});

// change logo and nav size on scroll
const setHeaderHeight = (newValue) => {
  r.style.setProperty("--header-height", newValue);
};

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    logo.classList.remove("logo-big");
    logo.classList.add("logo-small");
    logoImg.src = "./img/logo/Siska-logo-square.png";
    setHeaderHeight("60px");
  } else {
    logo.classList.remove("logo-small");
    logo.classList.add("logo-big");
    logoImg.src = "./img/logo/siska-logo-gif.gif";
    setHeaderHeight("80px");
  }
});
