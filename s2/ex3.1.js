function reduce(arr, f, initial) {
  let acc = initial
  for (const elem of arr) {
    acc = f(acc, elem)
  }
  return acc
}

console.log(reduce([1, 2, 3], (a, e) => a + e, 0))