'use strict'

let Singleton = require('./index').Singleton

/**
 * [Counter description]
 *
 * Explanation:
 * Counter - some class which later will be our singleton instance
 */
function Counter() {
  //private
  let initValue = 0
  let count = initValue

  //public
  return {
    inc() {
      return ++count
    },
    dec() {
      return --count
    },
    reset() {
      count = initValue
    },
    getValue() {
      return count
    }
  }
}

//=========Example of usage============
//Our singleton, so we take some ordinary Class (Counter)
//and created a Singlen from it
let CounterSingleton = Singleton(Counter)
let counterA = CounterSingleton.getInstance()
let counterB = CounterSingleton.getInstance()
counterA.inc()
counterB.inc()
counterB.inc()
counterA.getValue() //3
counterB.getValue() //3

//Exports
module.exports = {
  CounterSingleton: Singleton(Counter)
}
