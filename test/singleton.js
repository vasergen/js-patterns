'use strict'

let assert = require('assert')
let singletonExample = require('../singleton/example')
let CounterSingleton = singletonExample.CounterSingleton

describe('Singleton Pattern', () => {
  let counterA = CounterSingleton.getInstance()
  let counterB = CounterSingleton.getInstance()

  it('check increment', () => {
    counterA.inc()
    counterB.inc()
    counterB.inc()

    assert.equal(3, counterA.getValue())
    assert.equal(3, counterB.getValue())
  })

  it('check decrement', () => {
    counterA.dec()
    counterA.dec()

    assert.equal(1, counterA.getValue())
    assert.equal(1, counterB.getValue())
  })
})
