import { describe, it } from "eslint/lib/rule-tester/rule-tester";
import {filterEspecies} from "../src/data.js"; //sorting, searchName, filterGender, filterStatus 

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
    "gender": "Female",
  },
  {
    "id": 1,
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
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
//const [Morty, Summer, Jessica, Rick, Hamster, Abadango] = characters

describe('filterEspecies', () => {
  it('Deverá filtrar os personsagens por espécie', () => {
    expect(typeof filterEspecies).toBe('function');
  });

  it("Deverá retornar os personagens Human", () => {
  //  expect(filterEspecies(characters, "Human"))
  const filtrado = filterEspecies(characters, "Human")
  
  for(let i = 0; i<filtrado.length - 1; i++) {
    expect(filtrado[i].species).toBe("Human")
  }
  })
})
