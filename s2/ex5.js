const sampleList = [{
  name: 'a1',
  ram: 8,
  cpu: 'i3'
}, {
  name: 'a2',
  ram: 16,
  cpu: 'i5'
}, {
  name: 'a3',
  ram: 32,
  cpu: 'i3'
}]

const sampleMask = {
  ram: 16,
  cpu: 'i5'
}

function find(list, mask) {
  return list.filter(e => {
    let matched = true
    for (const prop in mask) {
      if (prop in e) {
        if (mask[prop] !== e[prop]) {
          matched = false
        }
      }
    }
    return matched
  })
}

console.log(find(sampleList, sampleMask))