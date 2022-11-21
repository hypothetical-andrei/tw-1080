function cleanString(s, stopWords, minLength) {
  return s.split(' ').filter(e => e.length >= minLength).filter(e => stopWords.indexOf(e) === -1).join(' ')
}

console.log(cleanString('the cat in a hat has a bat', ['the', 'in'], 2))