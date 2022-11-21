// const countAppearences = (s, c) => {
//   let count = 0
//   for (const elem of s) {
//     if (elem === c) {
//       count++
//     }
//   }
//   return count
// }

const countAppearences = (s, c) => s.split(c).length - 1

console.log(countAppearences('a little cat', 'a'))
console.log(countAppearences('', 'a'))
console.log(countAppearences('a little cat', 'z'))
