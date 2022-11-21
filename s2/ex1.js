const sampleSquares = [1, 2, 3, 4, 5]

const totalArea = (squareList) => squareList.map(e => e ** 2).reduce((a, e) => a + e, 0)

console.log(totalArea(sampleSquares))