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
  let _initValue = 0
  let _count = _initValue

  return {
    inc() { return ++_count },
    dec() { return --_count },
    reset() { count = _initValue },
    print() { console.log(`Count: ${_count}`) }
  }
}

//CounterSingleton
let CounterSingleton = Singleton(Counter)

//Test
let countA = CounterSingleton.getInstance()
let countB = CounterSingleton.getInstance()
countA.inc()
countA.inc()
countB.inc()

countA.print()
