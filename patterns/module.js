'use strict'
/**
* Pattern: Module
*/

let counter = (function() {
  //Private properties
  let count = 0

  //Private methods
  function _inc() {
    return ++count
  }

  function _dec() {
    return --count
  }

  function _reset() {
    count = 0
  }

  function _print() {
    console.log(`Count = ${count}`);
  }

  //Public API
  return {
    inc: _inc,
    dec: _dec,
    reset: _reset,
    print: _print
  }
})()

counter.inc()
counter.inc()

counter.print()
