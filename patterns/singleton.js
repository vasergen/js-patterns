'use strict'

/**
* Pattern: Singleton
*/

//Some Class which later will be our singleton instance
function Counter() {
  let _initValue = 0
  let _count = _initValue

  this.inc = function () {
    return ++_count
  }
  this.dec = function() {
    return --_count
  }
  this.reset = function() {
    count = _initValue
  }
  this.print = function() {
    console.log(`Count: ${_count}`)
  }
}

//Singleton Wrapper
function SingletonWrapper(ClassName) {
  let instance

  return {
    getInstance() {
      if(!instance) {
        instance = new ClassName()
      }

      return instance
    }
  }
}

//Singleton
let CounterSingleton = SingletonWrapper(Counter)

let countA = CounterSingleton.getInstance()
let countB = CounterSingleton.getInstance()
countA.inc()
countA.inc()
countB.inc()

countA.print()
