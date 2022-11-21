const birthYears = [1981, 1992, 2020, 2005, 2000]

const currentYear = 2022

function getAges(years, current, limit) {
  return years.map(e => current - e).filter(e => e >= limit)
}

console.log(getAges(birthYears, currentYear, 18))