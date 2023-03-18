const data = require('../data/zoo_data');

function mountObjAndOfficeHour() {
  const schedule = {};
  Object.entries(data.hours)
    .forEach((el) => {
      let text = `Open from ${el[1].open}am until ${el[1].close}pm`;
      if (el[0] === 'Monday') {
        text = 'CLOSED';
      }
      schedule[el[0]] = { officeHour: text, exhibition: [] };
    });
  return schedule;
}

function exhibitionAnimals(obj) {
  const scheduleObj = obj;
  data.species.forEach((el) => {
    el.availability.forEach((day) => {
      scheduleObj[day].exhibition.push(el.name);
    });
  });
  scheduleObj.Monday.exhibition = 'The zoo will be closed!';
  return scheduleObj;
}

function getSchedule(scheduleTarget) {
  const scheduleObj = mountObjAndOfficeHour();
  const fullScheduleObj = exhibitionAnimals(scheduleObj);
  const week = Object.keys(data.hours);
  const animals = data.species.map((animal) => animal.name);

  if (week.includes(scheduleTarget)) {
    return { [scheduleTarget]: fullScheduleObj[scheduleTarget] };
  }
  if (animals.includes(scheduleTarget)) {
    return data.species.find((el) => el.name === scheduleTarget).availability;
  }
  return fullScheduleObj;
}

module.exports = getSchedule;
