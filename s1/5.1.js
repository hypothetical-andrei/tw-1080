function fib(n) {
  if (n === 0 || n === 1) {
    return 1
  } else {
    return fib(n - 1) + fib(n - 2)
  }
}


if (process.argv.length < 3) {
  console.log('not enough args')
} else {
  const n = parseInt(process.argv[2])
  console.log(fib(n))
}