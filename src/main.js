import {} from './data.js';

import data from './data/rickandmorty/rickandmorty.js';

function showCards(data) {
    document.getElementById('card-container').innerHTML = data.map((item) => `
      <section class="card">
        <figure class="card-figure">
        <img class="card-img" src="${item.image}">
        </figure>
        <section class="container-name">
          <h3 class="name">${item.name}</h3>
        </section>
        <section class="info">
          <ul class="list">
            <li class="list-item">Status: ${item.status}</li>
            <li class="list-item">Gender: ${item.gender}</li>
            <li class="list-item">Species: ${item.species}</li>
            <li class="list-item">Appears in: ${item.episode.length} episodes</li>
            <li class="list-item">Origin: ${item.origin.name}</li>
          </ul>
        </section>
      </section>
   `).join("");
  }
  
  showCards(data.results);
  


console.log(example, data);
