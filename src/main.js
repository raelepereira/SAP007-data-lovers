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
      
    </section>
  `).join("");
}


showCards(data.results);

//FUNÇÃO DE ORDERNAR A-Z e Z-A 
function sortCharacter(evt) {
  evt.preventDefault();
  const sortBy = sorting(data.results, evt.target.value);
  showCards(sortBy);
}

document.getElementById("sorting-AZ").addEventListener("change", sortCharacter);


//FUNÇÃO DE SELECIONAR PELO GÊNERO
function sortGender(evt) {
  evt.preventDefault();
  const sortBy = filterGender(data.results, evt.target.value); // constante com o resultado do filtro 
  document.getElementById("porcentageFiltro").innerHTML = (`The percentage of characters that match the filter is: ${(sortBy.length / 493 * 100).toFixed(2)} %`);
  showCards(sortBy);
}

document.getElementById("filter-gender").addEventListener("change", sortGender);

//FUNÇÃO DE SELECIONAR PELO STATUS
function sortStatus(evt) {
  evt.preventDefault();
  const sortBy = filterStatus(data.results, evt.target.value);
  document.getElementById("porcentageFiltro").innerHTML = (`The percentage of characters that match the filter is: ${(sortBy.length / 493 * 100).toFixed(2)} %`);
  showCards(sortBy);
}

document.getElementById("filter-status").addEventListener("change", sortStatus);

//FUNÇÃO DE SELECIONAR PELA ESPÉCIE
function sortSpecies(evt) {
  evt.preventDefault();
  const sortBy = filterEspecies(data.results, evt.target.value);
  document.getElementById("porcentageFiltro").innerHTML = (`The percentage of characters that match the filter is: ${(sortBy.length / 493 * 100).toFixed(2)} %`);
  showCards(sortBy);
}

document.getElementById("filter-species").addEventListener("change", sortSpecies);


//função de recarregar a página
var btn = document.querySelector("#clear");
btn.addEventListener("click", function () {

  location.reload();
});


//função de procurar pelo nome (input)
function searchByName(e) {
  const charactersByName = searchName(data.results, e.target.value);
  document.getElementById("porcentageFiltro").innerHTML = (`The percentage of characters that match the filter is: ${(charactersByName.length / 493 * 100).toFixed(2)} %`);
  showCards(charactersByName);
}
searchInput.addEventListener("keyup", searchByName);





// function resultado(e) {
//   console.log(sortBy.result.length);
// }