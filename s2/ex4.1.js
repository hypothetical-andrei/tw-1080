const sampleText = 'the quick brown fox jumps over the lazy dog'
const sampleDict = ['quick', 'lazy']

function bowlerize (text, dict) {
  const words = sampleText.split(' ')
  const censored = words.map(w => {
    if (dict.indexOf(w) !== -1) {
      return w[0] + '*'.repeat(w.length - 2) + w[w.length - 1]
    } else {
      return w
    }
  })
  return censored.join(' ')
} 

console.log(bowlerize(sampleText, sampleDict))