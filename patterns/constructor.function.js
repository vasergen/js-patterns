'use strict'

/**
* Pattern: Constructor (Function Notaiton)
*/

function Car(model, year) {
  this.model = model
  this.year = year
}

Car.prototype.toString = function() {
  return `Model: ${this.model}, Year: ${this.year}`
}

let car = new Car('Honda', 1989)
console.log(car.toString())
