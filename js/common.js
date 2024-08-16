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

document.addEventListener(
  "DOMContentLoaded",
  loadHtmlFragment("header.html", "header", "header.js")
);

document.addEventListener(
  "DOMContentLoaded",
  loadHtmlFragment("footer.html", "footer", "footer.js")
);

document.addEventListener(
  "DOMContentLoaded",
  loadHtmlFragment("introduction-text.html", "introduction-text")
);

document.addEventListener(
  "DOMContentLoaded",
  loadHtmlFragment("harmonogram-2024.html", "harmonogram-table-2024")
);
