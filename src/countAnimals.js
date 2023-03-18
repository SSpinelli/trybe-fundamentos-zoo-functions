const data = require('../data/zoo_data');

function AnimalsBySpecieAndSex(animal) {
  const animalObj = data.species.find((el) => el.name === animal.specie);

  const animalBySex = animalObj.residents.filter((el) => el.sex === animal.sex);

  return animalBySex.length;
}

function AnimalsBySpecie(animal) {
  const animalObj = data.species.find((el) => el.name === animal.specie);
  return animalObj.residents.length;
}

function countAnimals(animal) {
  if (!animal) {
    const totalOfAnimal = {};
    data.species.forEach((el) => { totalOfAnimal[el.name] = el.residents.length; });
    return totalOfAnimal;
  }

  if (animal.specie && animal.sex) {
    return AnimalsBySpecieAndSex(animal);
  }

  return AnimalsBySpecie(animal);
}

module.exports = countAnimals;
