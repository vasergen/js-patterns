'use strict'

/**
* Pattern: Singleton
*/

//Singleton
function Singleton(ClassName) {
  let instance

  return {
    getInstance() {
      if(!instance)
        instance = new ClassName()

      return instance
    }
  }
}

//Counter - some class which later will be our singleton instance
function Counter() {
  let initValue = 0
  let count = initValue

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

//CounterSingleton
let CounterSingleton = Singleton(Counter)

module.exports = {
  CounterSingleton
}
