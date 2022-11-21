class Stream {
  #value
  #nextValue
  static #count = 0

  constructor (seed, nextValue) {
    this.#value = seed
    this.#nextValue = nextValue
    Stream.#count++
  }

  get value () {
    return this.#value
  }

  get next () {
    this.#value = this.#nextValue(this.#value)
    return this.#value
  }

  static get count () {
    return Stream.#count
  }

}

class ConstantStream extends Stream {
  constructor (value) {
    super(value, value => value)
  }
}

class StepStream extends Stream {
  constructor (value, step) {
    super(value, value => value + step)
  }
}

const constantStream = new ConstantStream(1)
const stepStream = new StepStream(0, 2)
for (let i = 0; i < 10; i++) {
  console.log(`c -> `, constantStream.next)
  console.log(`s -> `, stepStream.next)
}