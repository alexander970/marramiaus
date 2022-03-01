"use strict";

const allMarramiaus = [];
const marramiausList = document.querySelector(".marramiaus");

function appendInitialMarramiaus(marramiaus) {
  marramiaus.forEach((marramiau) => {
    allMarramiaus.push(marramiau.username);
    appendMarramiau(marramiau.username);
  });
}

//removes the marramiaus elements
function removeAllMarramiaus() {
  while (marramiausList.firstChild) {
    marramiausList.removeChild(marramiausList.firstChild);
  }
}

function appendMarramiaus(marramiaus) {
  removeAllMarramiaus();
  marramiaus.forEach((marramiau) => {
    appendMarramiau(marramiau);
  });
}

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

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => appendInitialMarramiaus(data));

const input = document.querySelector(".search");

//filter marramiaus
const filterMarramiaus = (searchPredicate) => {
  return allMarramiaus.filter(
    (marramiau) =>
      marramiau.toLowerCase().indexOf(searchPredicate.toLowerCase()) !== -1
  );
};

function searchMarramiaus(event) {
  const searchPredicate = event.target.value;
  const filteredMarramiaus = filterMarramiaus(searchPredicate);
  appendMarramiaus(filteredMarramiaus);
}

input.addEventListener("input", searchMarramiaus);
