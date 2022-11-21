function makeArray(s) {
  const result = []
  for (const elem of s.split(' ')) {
    result.push(parseInt(elem))
  }
  return result
}

console.log(makeArray('1 2 3 4 5'))