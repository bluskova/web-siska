const loadHtmlFragment = (htmlFile, whereToInsert, jsFile = null) => {
  const targetElement = document.getElementById(whereToInsert);

  if (!targetElement) {
    console.error(`Element with ID ${whereToInsert} not found.`);
    return;
  }

  fetch(`./html-fragment/${htmlFile}`)
    .then((response) => response.text())
    .then((data) => {
      targetElement.innerHTML = data;

      if (jsFile) {
        const script = document.createElement("script");
        script.src = `./js/${jsFile}`;
        script.async = true;
        document.body.appendChild(script);
      }
    })
    .catch((error) => console.error(`Error loading ${htmlFile}:`, error));
};

document.addEventListener("DOMContentLoaded", () => {
  loadHtmlFragment("header.html", "header", "header.js");
  loadHtmlFragment("footer.html", "footer", "footer.js");

  if (document.getElementById("introduction-text")) {
    loadHtmlFragment("introduction-text.html", "introduction-text");
  }

  if (document.getElementById("harmonogram-table-2024")) {
    loadHtmlFragment("harmonogram-2024.html", "harmonogram-table-2024");
  }
});
