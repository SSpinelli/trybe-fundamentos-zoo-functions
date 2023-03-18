const data = require('../data/zoo_data');

function employeeCoverage(info) {
  const employeeObj = {};

  const employee = data.employees
    .find((el) => el.id === info || [el.firstName, el.lastName].includes(info));
  employeeObj.fullName = `${employee.firstName} ${employee.lastName}`;
  employeeObj.id = employee.id;

  const animals = data.species.filter((el) => employee.responsibleFor.includes(el.id));

  employeeObj.species = animals.map((el) => el.name);
  employeeObj.locations = animals.map((el) => el.location);

  return employeeObj;
}

function getEmployeesCoverage(configObj) {
  if (!configObj) {
    return data.employees.map((el) => employeeCoverage(el.id));
  }

  const param = Object.values(configObj)[0];

  const employee = data.employees
    .find((el) => el.id === param || [el.firstName, el.lastName].includes(param));

  if (!employee) {
    throw new Error('Informações inválidas');
  }

  return employeeCoverage(param);
}

module.exports = getEmployeesCoverage;
