const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const totalEntrants = {
    child: 0,
    adult: 0,
    senior: 0,
  };

  entrants.forEach((el) => {
    if (el.age < 18) {
      totalEntrants.child += 1;
    } else if (el.age >= 50) {
      totalEntrants.senior += 1;
    } else {
      totalEntrants.adult += 1;
    }
  });

  return totalEntrants;
}

function calculateEntry(entrants) {
  if (Array.isArray(entrants)) {
    const entrantsByType = countEntrants(entrants);

    const totalAdultPrice = data.prices.adult * entrantsByType.adult;
    const totalSeniorPrice = data.prices.senior * entrantsByType.senior;
    const totalChildPrice = data.prices.child * entrantsByType.child;

    return totalAdultPrice + totalSeniorPrice + totalChildPrice;
  }
  return 0;
}

module.exports = { calculateEntry, countEntrants };
