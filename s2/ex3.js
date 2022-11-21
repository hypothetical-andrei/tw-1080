function map(a, f) {
  const results = []
  for (const elem of a) {
    results.push(f(elem))
  }
  return results
}

console.log(map([1, 2, 3], (x) => x * 2))