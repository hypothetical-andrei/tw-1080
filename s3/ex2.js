function getSummer () {
  const cache = {}
  return function (...args) {
    const key = JSON.stringify(args)
    if (key in cache) {
      console.log(`found ${key} in cache`)
      return cache[key]
    } else {
      const result = args.reduce((a, e) => a + e, 0)
      cache[key] = result
      return result
    }
  }
}

const summer = getSummer()
console.log(summer(1, 2, 3, 4, 5))
console.log(summer(1, 2, 3, 4, 5))
console.log(summer(1, 2, 3, 4, 5, 6))