import {sorting, searchName, filterEspecies, filterGender, filterStatus } from "./data.js";

const characters = [
  {
    "name": "Gar Gloonch",
    "status": "Dead",
    "species": "Alien",
    "gender": "Male",
  },
  {
    "name": "Antenna Rick",
    "status": "unknown",
    "species": "Human",
    "gender": "Male",
  },
  {
    "name": "Antenna Morty",
    "status": "Alive",
    "species": "Human",
    "gender": "Male",
  },
  {
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "gender": "Male",
  }
];

const exampleOfNames = [
  { "name": "Gar Gloonch" },
  { "name": "Rick Sanchez" },
]

const orderAZ = [
  {
    "name": "Antenna Morty",
    "status": "Alive",
    "species": "Human",
    "gender": "Male",
  },
  {
    "name": "Antenna Rick",
    "status": "unknown",
    "species": "Human",
    "gender": "Male",
  },
  {
    "name": "Gar Gloonch",
    "status": "Dead",
    "species": "Alien",
    "gender": "Male",
  },
  {
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "gender": "Male",
  }
]

describe("searchName", () => {
    it("is a function", () => {
      expect(typeof searchName).toBe("function");
    });
  
    it("You must search for a name `searchName`", () => {
      const expected = searchName(exampleOfNames, "Rick")
      expect(expected).toEqual([{ "name": "Rick Sanchez" }])
    });
  });


  describe("filterSpecies", () => {
    it("is a function", () => {
      expect(typeof filterEspecies).toBe("function");
    });
  
    it("You should filter by species `filterSpecies`", () => {
      const humanSpecies = "Human"
      const expected = filterEspecies(characters, humanSpecies)
      expect(expected[0].species).toEqual(humanSpecies)
    });
  });