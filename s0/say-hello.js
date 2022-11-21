// const sayHello = function (person) {
//   console.log(`Hello, ${person}`)
// }

// const sayHello = (person) => {
//   console.log(`Hello, ${person}`)
// }

// sayHello('timmy')

// const makePhrase = (first, second, third) => {
//   return first + second + third
// }

// const result = makePhrase('a', 'b', 'c')
// console.log(result)

const makePhrase = (words) => {
  let phrase = ''
  for (const word of words) {
    phrase += ' ' + word
  }
  return phrase
}

const result = makePhrase(['a', 'b', 'c'])
console.log(result)

// let a

// console.log(a)

// console.log(b)
