// function makeArray(source, ...args) {
//   for (const elem of args) {
//     source.push(elem)
//   }
//   return source
// }

function makeArray(source, ...args) {
  return source.concat(args)
}
let a = [1,2,3]
let b = [...a]


console.log(makeArray([1, 2, 3, 4], 5, 6, 7))