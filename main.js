"use strict";

const marramiausList = document.querySelector(".marramiaus");

function appendMarramiaus(marramiaus) {
  marramiaus.forEach((marramiau) => appendMarramiau(marramiau.username));
}

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => appendMarramiaus(data));

function appendMarramiau(name) {
  const newArticle = document.createElement("article");

  const newH2 = document.createElement("h2");
  const newContent = document.createTextNode(name);
  newH2.appendChild(newContent);

  const newImg = document.createElement("img");
  newImg.setAttribute(
    "src",
    `https://robohash.org/${name}?set=set4&size=150x150`
  );
  newImg.setAttribute("alt", name);

  newArticle.appendChild(newH2);
  newArticle.appendChild(newImg);

  marramiausList.appendChild(newArticle);
}
