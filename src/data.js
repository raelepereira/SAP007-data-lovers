/*export const filterData = (data, condition) => {
    return data.filter((personagens) => (personagens[condition[0]] == condition[1]));
  }*/


//FUNÇÃO DE ORDERNAR A-Z e (Z-A < não funciona)
  export const ordering = (data, sort) => {
  

    if (sort === "AZ") {
      console.log("entrou no if", data.sort((a, b) => a.name < b.name ? -1 : 1)
      )
      return data.sort((a, b) => a.name < b.name ? -1 : 1)
      
    } else {
      console.log("entrou no else", data.sort((a, b) => a.name > b.name ? -1 : 1))
      return data.sort((a, b) => a.name > b.name ? -1 : 1)

    } 
    
  };

//função de procurar pelo nome (input)
  export const searchName = (data, condition) => {
    const searchResults = data.filter(n => n.name.toLowerCase().includes(condition.toLowerCase()));
    return searchResults;
  }


  


