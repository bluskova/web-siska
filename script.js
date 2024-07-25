/////////////////////////// navigation /////////////////////////////////
const menuIcon = document.getElementById("menu-icon");
const navigation = document.querySelector("header nav");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav .menu-item");
const navLinksDown = document.querySelectorAll(
  "header nav .menu-item-dropdown"
);

/////////////////////////// footer  /////////////////////////////////

const footerCopyright = document.querySelector(".copyright");

// copyright - actual year
const thisYear = new Date().getFullYear();
footerCopyright.append(thisYear);
