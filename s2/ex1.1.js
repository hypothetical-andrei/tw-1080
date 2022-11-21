const sampleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const sumDivisible = (numberList, divisor) => numberList.filter(e => e % divisor === 0).reduce((a, e) => a + e, 0)

console.log(sumDivisible(sampleNumbers, 3))