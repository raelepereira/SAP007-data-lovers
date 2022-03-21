import data from "./data/rickandmorty/rickandmorty.js";
import {sorting, searchName, filterEspecies, filterGender, filterStatus } from "./data.js";

const searchInput = document.getElementById("search-input");

function showCards(data) {
  document.getElementById('card-container').innerHTML = data.map((item) => `
    <section id= "card-info" class="card">
        <img class="card-img" src="${item.image}">
        <section class="container-name">
          <h3 class="name"><strong>${item.name}</strong></h3>
        </section>
        <section id="info-card"class="info">
          <p class="list-item">Status: ${item.status}</p>
          <p class="list-item">Gender: ${item.gender}</p>
          <p class="list-item">Species: ${item.species}</p>
          <p class="list-item">Appears in: ${item.episode.length} episodes</p>
          <p class="list-item">Origin: ${item.origin.name}</p>
        </section>
    </section>
  `).join("");
}

showCards(data.results);

function sortCharacter(evt) {
  evt.preventDefault();
  const sortBy = sorting(data.results, evt.target.value);
  showCards(sortBy);
}

document.getElementById("sorting-AZ").addEventListener("change", sortCharacter);

function filteringGender(evt) {
  evt.preventDefault();
  const sortBy = filterGender(data.results, evt.target.value); 
  document.getElementById("porcentageFiltro").innerHTML = (`The percentage of characters that match the filter is: ${(sortBy.length / 493 * 100).toFixed(2)} %`);
  showCards(sortBy);
}

document.getElementById("filter-gender").addEventListener("change", filteringGender);


function filteringStatus(evt) {
  evt.preventDefault();
  const sortBy = filterStatus(data.results, evt.target.value);
  document.getElementById("porcentageFiltro").innerHTML = (`The percentage of characters that match the filter is: ${(sortBy.length / 493 * 100).toFixed(2)} %`);
  showCards(sortBy);
}

document.getElementById("filter-status").addEventListener("change", filteringStatus);

function filteringSpecies(evt) {
  evt.preventDefault();
  const sortBy = filterEspecies(data.results, evt.target.value);
  document.getElementById("porcentageFiltro").innerHTML = (`The percentage of characters that match the filter is: ${(sortBy.length / 493 * 100).toFixed(2)} %`);
  showCards(sortBy);
}

document.getElementById("filter-species").addEventListener("change", filteringSpecies);

var btn = document.querySelector("#clear");
btn.addEventListener("click", function () {

  location.reload();
});

function searchByName(e) {
  const charactersByName = searchName(data.results, e.target.value);
  document.getElementById("porcentageFiltro").innerHTML = (`The percentage of characters that match the filter is: ${(charactersByName.length / 493 * 100).toFixed(2)} %`);
  showCards(charactersByName);
}
searchInput.addEventListener("keyup", searchByName);

