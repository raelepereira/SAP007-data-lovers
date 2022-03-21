import {filterGender} from "../data.js";

const characters = [
  {
    "id": 1,
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
  },
  {
    "id": 2,
    "name": "Morty Smith",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",

  },
  {
    "id": 3,
    "name": "Summer Smith",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Female",
  }
]


const [Rick, Morty, Summer] = characters
console.log(Morty, Rick, Summer)


describe("filtroGenero", () => {
  it("Deverá ser uma função", () => {
    expect(typeof filterGender).toBe("function");
  });

  it("Devera filtrar o genero selecionado", () => {
    const retornoPersonagens = [characters[2]]
    expect(filterGender(characters, "Female")).toEqual(retornoPersonagens)
  })
});

