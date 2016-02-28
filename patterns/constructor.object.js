'use strict'

/**
* Pattern: Constructor (Object Notation)
*/

let car = {
  model: 'Honda',
  year: 1989
}

car.toString = function() {
  return `Model: ${this.model}, Year: ${this.year}`
}

console.log(car.toString())
