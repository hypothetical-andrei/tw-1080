const dictionary = ['brown', 'green', 'yellow']

const sampleText = `
  best
  read
  on
  windy
  nights
`

const checkAcrostih = (text, dict) =>{
  const word = text.split('\n').map(e => e.trim()).filter(e => e).map(e => e[0]).join('')
  return dict.indexOf(word) !== -1
} 

console.log(checkAcrostih(sampleText, dictionary))