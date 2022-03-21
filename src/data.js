export const sorting = (data, sorted) => {

  if (sorted === "AZ") {
    return data.sort((a, b) => a.name < b.name ? -1 : 1)
  } else {
    return data.sort((a, b) => a.name > b.name ? -1 : 1)
  }
};

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

export const filterEspecies = (data, especie) => {
  if (especie === "Human") {
    return data.filter(item => {
      return item.species === 'Human';
    })
  } else if (especie === "Humanoid") {
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
      return item.species === 'Robot';
    })
  } else if (especie === "Unknown") {
    return data.filter(item => {
      return item.species === 'unknown';
    })
  }
}

export const searchName = (data, condition) => {
  const searchResults = data.filter(n => n.name.toLowerCase().includes(condition.toLowerCase()));
  return searchResults;
}