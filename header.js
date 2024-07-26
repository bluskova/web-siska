const menuIcon = document.getElementById("menu-icon");
const navigation = document.querySelector("header nav");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav .menu-item");
const navLinksDown = document.querySelectorAll(
  "header nav .menu-item-dropdown"
);

// inicialization
let hiddenNav = true;

// function which replace the hamburger and cross icon
const replaceClass = (element, oldClass, newClass) => {
  element.classList.remove(oldClass);
  element.classList.add(newClass);
};

// function which open navigation
const openNav = () => {
  navigation.style.display = "block";
  replaceClass(menuIcon, "fa-bars", "fa-xmark");
  hiddenNav = false;
};

// function which close navigation
const closeNav = () => {
  navigation.style.display = "none";
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
