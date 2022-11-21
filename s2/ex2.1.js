function formatString (s, format) {
  let modified = s
  for (let prop in format) {
    if (modified.indexOf('{' + prop + '}') !== -1) {
      modified = modified.replace('{' + prop + '}', format[prop])
    }
  }
  return modified
}

console.log(formatString("this is a {adj} string and we've {vb} it", {
  adj: 'nice', 
  vb: 'formatted' 
}))