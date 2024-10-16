const menuIcon = document.getElementById("menu-icon");
const navigation = document.querySelector("header nav");
const logo = document.querySelector("header .logo-container");

// inicialization
let hiddenNav = true;

// function which replace the hamburger and cross icon
const replaceClass = (element, oldClass, newClass) => {
  element.classList.remove(oldClass);
  element.classList.add(newClass);
};

// function which open navigation
const openNav = () => {
  replaceClass(navigation, "display-none", "display-block");
  replaceClass(menuIcon, "fa-bars", "fa-xmark");
  hiddenNav = false;
};

// function which close navigation
const closeNav = () => {
  replaceClass(navigation, "display-block", "display-none");
  replaceClass(menuIcon, "fa-xmark", "fa-bars");
  hiddenNav = true;
};

// open and close navigation
menuIcon.addEventListener("click", () => {
  if (hiddenNav) {
    openNav();
  } else {
    closeNav();
  }
});

// close the navigation after click anywhere (include 'navLinks', exclude 'menuIcon')
document.body.addEventListener("click", (event) => {
  if (!hiddenNav && event.target.id !== "menu-icon") {
    closeNav();
  }
});

// close the navigation after click 'Escape'
window.addEventListener("keydown", (event) => {
  if (event.code === "Escape" && !hiddenNav) {
    closeNav();
  }
});

// change logo size on scroll
window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    logo.classList.remove("logo-big");
    logo.classList.add("logo-small");
    console.log("scroll");
  } else {
    logo.classList.remove("logo-small");
    logo.classList.add("logo-big");
  }
});
