// function checkDivisor(n, divisor) {
//   if (n % divisor === 0) {
//     return true
//   } else {
//     return false
//   }
// }

let checkDivisor = (n, divisor) => !(n % divisor)

console.log(checkDivisor(6, 3))
console.log(checkDivisor(6, 5))