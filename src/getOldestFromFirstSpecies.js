const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employee = data.employees.find((el) => el.id === id);

  const firstAnimal = data.species.find((el) => el.id === employee.responsibleFor[0]);

  const ages = firstAnimal.residents.map((el) => el.age);

  return Object.values(firstAnimal.residents.find((el) => el.age === Math.max(...ages)));
}

module.exports = getOldestFromFirstSpecies;
