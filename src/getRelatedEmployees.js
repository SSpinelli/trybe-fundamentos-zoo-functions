const data = require('../data/zoo_data');

function isManager(id) {
  const listOfManagers = data.employees.map((el) => el.managers);

  return listOfManagers.some((el) => el.includes(id));
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  const relatedEmployess = data.employees.filter((el) => el.managers.includes(managerId));

  return relatedEmployess.map((el) => `${el.firstName} ${el.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
