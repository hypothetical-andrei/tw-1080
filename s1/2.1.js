function strDiff(me, other) {
  if (me.length !== other.length) {
    return -1
  }
  let diffs = 0
  for (let i = 0; i < me.length; i++) {
    if (me[i] !== other[i]) {
      diffs++
    }
  }
  return diffs
}

console.log(strDiff('a', 'ab'))
console.log(strDiff('ab', 'ac'))
console.log(strDiff('ab', 'ab'))