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
  fetch("./html-fragment/header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header").innerHTML = data;
      afterHeaderLoad();
    })
    .catch((error) => console.error("Error loading header.html:", error));

  fetch("./html-fragment/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
      afterFooterLoad();
    })
    .catch((error) => console.error("Error loading footer.html:", error));
};

const loadHarmonogram = () => {
  fetch("./html-fragment/harmonogram-2024.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("harmonogram-table-2024").innerHTML = data;
      afterHeaderLoad();
    })
    .catch((error) =>
      console.error("Error loading harmonogram-2024.html:", error)
    );
};

const loadIntroductionText = () => {
  fetch("./html-fragment/introduction-text.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("introduction-text").innerHTML = data;
      afterHeaderLoad();
    })
    .catch((error) =>
      console.error("Error loading introduction-text.html:", error)
    );
};

document.addEventListener("DOMContentLoaded", loadHeaderAndFooter);
document.addEventListener("DOMContentLoaded", loadHarmonogram);
document.addEventListener("DOMContentLoaded", loadIntroductionText);
