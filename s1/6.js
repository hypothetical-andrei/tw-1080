function fdist(text) {
  const results = {}
  const words = text.split(' ')
  for (const elem of words) {
    if (elem in results) {
      results[elem]++
    } else {
      results[elem] = 1
    }
  }
  for (const word in results) {
    results[word] /= words.length
  }
  return results
}

console.log(fdist('the quick brown fox jumps over the lazy dog'))