"use strict";

const allMarramiaus = [];
const marramiausList = document.querySelector(".marramiaus");

function appendInitialMarramiaus(marramiaus) {
  marramiaus.forEach((marramiau) => {
    allMarramiaus.push({
      name: marramiau.username,
      catchPhrase: marramiau.company.catchPhrase,
    });
    appendMarramiau(marramiau.username, marramiau.company.catchPhrase);
  });
}

//removes the marramiaus elements
function removeAllMarramiaus() {
  while (marramiausList.firstChild) {
    marramiausList.removeChild(marramiausList.firstChild);
  }
}

function appendSearchMarramiaus(marramiaus) {
  removeAllMarramiaus();
  marramiaus.forEach((marramiau) => {
    appendMarramiau(marramiau.name, marramiau.catchPhrase);
  });
}

function appendMarramiau(name, catchPhrase) {
  const newMarramiau = document.createElement("article");

  const newMarramiauName = document.createElement("h2");
  const newMarramiauNameContent = document.createTextNode(name);
  newMarramiauName.appendChild(newMarramiauNameContent);

  const newMarramiauImg = document.createElement("img");
  newMarramiauImg.setAttribute(
    "src",
    `https://robohash.org/${name}?set=set4&size=150x150`
  );
  newMarramiauImg.setAttribute("alt", name);

  const newMarramiauCatchPhrase = document.createElement("p");
  const newMarramiauCatchPhraseContent = document.createTextNode(catchPhrase);
  newMarramiauCatchPhrase.appendChild(newMarramiauCatchPhraseContent);

  newMarramiau.appendChild(newMarramiauName);
  newMarramiau.appendChild(newMarramiauImg);
  newMarramiau.appendChild(newMarramiauCatchPhrase);

  marramiausList.appendChild(newMarramiau);
}

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => appendInitialMarramiaus(data));

const input = document.querySelector(".search");

//filter marramiaus
const filterMarramiaus = (searchPredicate) => {
  return allMarramiaus.filter(
    (marramiau) =>
      marramiau.name.toLowerCase().indexOf(searchPredicate.toLowerCase()) !== -1
  );
};

function searchMarramiaus(event) {
  const searchPredicate = event.target.value;
  const filteredMarramiaus = filterMarramiaus(searchPredicate);
  appendSearchMarramiaus(filteredMarramiaus);
}

input.addEventListener("input", searchMarramiaus);
