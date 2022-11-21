Number.prototype.times = function (callback) {
  for (let i = 0; i < this.valueOf(); i++) {
    callback()
  }
}

const n = new Number(5)

n.times(() => {
  console.log('called')
})

let factorial = 1
let i = 1
n.times(() => factorial *= i++)
console.log(factorial)