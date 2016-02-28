'use strict'

/**
* Pattern: Constructor (Es6 syntax)
*/

class Car {
  constructor(model, year) {
    this.model = model
    this.year = year
  }
  toString() {
    return `Model: ${this.model}, Year: ${this.year}`
  }
}

let car = new Car('Honda', 1989)

console.log(car.toString())
