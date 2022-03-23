import { describe, it } from "eslint/lib/rule-tester/rule-tester";
import {filterEspecies, filterGender, filterStatus} from "../src/data.js"; //sorting, searchName, filterStatus 

const characters = [
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
  },
  {
    "id": 179,
    "name": "Jessica",
    "status": "Alive",
    "species": "Cronenberg",
    "type": "",
    "gender": "Female",
  },
  {
    "id": 1,
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
  },
  {
    "id": 153,
    "name": "Hamster In Butt",
    "status": "Alive",
    "species": "Animal",
    "type": "",
    "gender": "unknown",
  },
  {
    "id": 6,
    "name": "Abadango Cluster Princess",
    "status": "Alive",
    "species": "Alien",
    "type": "",
    "gender": "Female",
  }
  
]
//const [Morty, Summer, Jessica, Rick, Hamster] = characters

describe('filterEspecies', () => {
  it("Deverá filtrar os personsagens por espécie", () => {
    expect(typeof filterEspecies).toBe("function");
  })
  it("Deverá retornar os personagens Human", () => {
  //  expect(filterEspecies(characters, "Human"))
  const filtrado = filterEspecies(characters, "Human")
  
  for(let i = 0; i<filtrado.length - 1; i++) {
    expect(filtrado[i].species).toBe("Human")
  }
  })
})

describe("filterGender", () =>{
  it ("Deverá filtrar os personagens por gênero", () => {
    expect(typeof filterGender).toBe("function");
  })

  it("Deverá retornar os personagens masculinos", () => {
    const filtrado = filterGender(characters, "Male")
    for(let i = 0; i<filtrado.length - 1; i++) {
      expect(filtrado[i].gender).toBe("Male")
  }
  })
})

describe("filterStatus", () =>{
  it ("Deverá filtrar os personagens por status", () => {
    expect(typeof filterStatus).toBe("function");
  })

  it("Deverá retornar os personagens Vivos", () => {
    const filtrado = filterStatus(characters, "Alive")
    for(let i = 0; i<filtrado.length - 1; i++) {
      expect(filtrado[i].status).toBe("Alive")
  }
  })
})
