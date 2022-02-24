import data from './data/rickandmorty/rickandmorty.js';
import {} from './data.js';



function showCards(data) {
  document.getElementById('card-container').innerHTML = data.map((item) => `

    <section id= "card-info" class="card">
        
      <img class="card-img" src="${item.image}">
        
      <section class="container-name">
        <h3 class="name"><strong>${item.name}</strong></h3>
      </section>

      

    </section>

  `).join("");
}

  
  showCards(data.results);

