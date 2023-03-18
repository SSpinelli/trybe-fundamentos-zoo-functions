const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees.find((el) => Object.values(el).includes(employeeName));
}

module.exports = getEmployeeByName;
