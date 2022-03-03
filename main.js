import {
  appendInitialMarramiaus,
  searchMarramiaus,
} from "./modules/marramiaus.js";

const input = document.querySelector(".search");
input.addEventListener("input", searchMarramiaus);

// clear-button functionality
const clearIcon = document.querySelector(".clear-icon");
const searchBar = document.querySelector(".search");

searchBar.addEventListener("keyup", () => {
  if (searchBar.value && clearIcon.style.visibility != "visible") {
    clearIcon.style.visibility = "visible";
  } else if (!searchBar.value) {
    clearIcon.style.visibility = "hidden";
  }
});

clearIcon.addEventListener("click", () => {
  searchBar.value = "";
  clearIcon.style.visibility = "hidden";
});

// load initial marramiaus
function loadInitialMarramiaus() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => appendInitialMarramiaus(data));
}

window.onload = () => loadInitialMarramiaus();
