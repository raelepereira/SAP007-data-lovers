/*export const filterData = (data, condition) => {
    return data.filter((personagens) => (personagens[condition[0]] == condition[1]));
  }*/


//FUNÇÃO DE ORDERNAR A-Z e (Z-A < não funciona)
  export const ordering = (data, order) => {
    if (order === "ordenarAZ") {
      return data.sort((a, b) => a.name < b.name ? -1 : 1)
    } else {
      return data.sort((a, b) => a.name > b.name ? 1 : -1)
    } 
  };


//função de procurar pelo nome (input)
  export const searchName = (data, condition) => {
    const searchResults = data.filter(n => n.name.toLowerCase().includes(condition.toLowerCase()));
    return searchResults;
  }


  


