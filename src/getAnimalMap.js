const data = require('../data/zoo_data');

function getAnimalsByLocation() {
  const animalsByLocation = {};
  data.species.forEach((el) => {
    if (animalsByLocation[el.location]) {
      animalsByLocation[el.location].push(el.name);
    } else {
      animalsByLocation[el.location] = [el.name];
    }
  });
  return animalsByLocation;
}

function listOfAnimalsNamesToUse(animal, options) {
  if (!options.sex) {
    return animal.residents.map((el) => el.name);
  }
  const animalsBySex = animal.residents.filter((el) => el.sex === options.sex);
  return animalsBySex.map((el) => el.name);
}

function getAnimalsByName(options) {
  const animalsByName = {};
  data.species.forEach((el) => {
    const nameOfAnimals = listOfAnimalsNamesToUse(el, options);
    if (options.sorted) {
      nameOfAnimals.sort();
    }
    if (!animalsByName[el.location]) {
      animalsByName[el.location] = [];
    }
    animalsByName[el.location].push({ [el.name]: nameOfAnimals });
  });
  return animalsByName;
}

function getAnimalMap(options) {
  if (!options || !Object.keys(options).includes('includeNames')) {
    return getAnimalsByLocation();
  }
  return getAnimalsByName(options);
}

module.exports = getAnimalMap;
