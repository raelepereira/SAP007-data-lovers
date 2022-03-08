//FUNÇÃO DE ORDERNAR A-Z e Z-A
  export const ordering = (data, sorted) => {
  
      if (sorted === "AZ") {  
      return data.sort((a, b) => a.name < b.name ? -1 : 1)     
    } else {
      return data.sort((a, b) => a.name > b.name ? -1 : 1)
   } 
  };


//FUNÇÃO ESCOLHER POR GÊNERO
export const filterGender = (data, genero) => {
  if (genero === "Male") {
    return data.filter(item => {
      return item.gender === 'Male';
    })
  } else if (genero === "Female") {
    return data.filter(item => {
      return item.gender === 'Female';
    })
  } else if (genero === "Genderless") {
    return data.filter(item => {
      return item.gender === 'Genderless';
    })
  } else if (genero === "unknown") {
    return data.filter(item => {
      return item.gender === 'unknown';
    })
  }
}

//FUNÇÃO ESCOLHER POR STATUS
export const filterStatus = (data, status) => {
  if (status === "Alive") {
    return data.filter(item => {
      return item.status === 'Alive';
    })
  } else if (status === "Dead") {
    return data.filter(item => {
      return item.status === 'Dead';
    })
  } else if (status === "Unknown") {
    return data.filter(item => {
      return item.status === 'unknown';
    })
  } 
}

//FUNÇÃO ESCOLHER PELA ESPÉCIE
export const filterEspecies = (data, especie) => {
  if (especie === "Humano") {
    return data.filter(item => {
      return item.species === 'Human';
    })
  } else if (especie === "Humanoide") {
    return data.filter(item => {
      return item.species === 'Humanoid';
    })
  } else if (especie === "Animal") {
    return data.filter(item => {
      return item.species === 'Animal';
    })
  } else if (especie === "Alien") {
    return data.filter(item => {
      return item.species === 'Alien';
    })
  } else if (especie === "mytholog") {
    return data.filter(item => {
      return item.species === 'Mytholog';
    })
  } else if (especie === "Robot") {
    return data.filter(item => {
      return item.species === 'Humanoid';
    })
  } else if (especie === "Unknown") {
    return data.filter(item => {
      return item.species === 'unknown';
    })
  } else if (especie === "Poopybutthole") {
    return data.filter(item => {
      return item.species === 'Poopybutthole';
    })
  } else if (especie === "Vampire") {
    return data.filter(item => {
      return item.species === 'Vampire';
    })
  } else if (especie === "Cronenberg") {
    return data.filter(item => {
      return item.species === 'Cronenberg';
    })
  } else if (especie === "Disease") {
    return data.filter(item => {
      return item.species === 'Disease';
    })
  } else if (especie === "Parasite") {
    return data.filter(item => {
      return item.species === 'Parasite';
    })
  }
}


//função de procurar pelo nome (input)
  export const searchName = (data, condition) => {
    const searchResults = data.filter(n => n.name.toLowerCase().includes(condition.toLowerCase()));
    return searchResults;
  }


  


