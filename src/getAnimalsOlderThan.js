const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animalObj = data.species.find((el) => el.name === animal);

  return animalObj.residents.every((el) => el.age >= age);
}

module.exports = getAnimalsOlderThan;
