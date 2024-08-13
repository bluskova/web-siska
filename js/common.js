const afterHeaderLoad = () => {
  fetch("./js/header.js")
    .then((response) => response.text())
    .then((scriptContent) => {
      eval(scriptContent);
    })
    .catch((error) => console.error("Error loading header.js:", error));
};

const afterFooterLoad = () => {
  fetch("./js/footer.js")
    .then((response) => response.text())
    .then((scriptContent) => {
      eval(scriptContent);
    })
    .catch((error) => console.error("Error loading footer.js:", error));
};

const loadHeaderAndFooter = () => {
  fetch("./header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header").innerHTML = data;
      afterHeaderLoad();
    })
    .catch((error) => console.error("Error loading header.html:", error));

  fetch("./footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
      afterFooterLoad();
    })
    .catch((error) => console.error("Error loading footer.html:", error));
};

document.addEventListener("DOMContentLoaded", loadHeaderAndFooter);
