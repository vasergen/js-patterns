'use strict'

/**
* Observer Pattern
*/

//Subject
function Subject() {
  let observers = new Set()

  return {
    addObserver(observer) {
      return observers.add(observer)
    },
    deleteObserver(observer) {
      return observers.delete(observer)
    },
    notify(message, data) {
      observers.forEach(observer => observer.update(message, data))
    }
  }
}

//Observer
function Observer() {
  return {
    //...this method should be implemented in concreate observer
    update(message, data) {}
  }
}

//Exports
module.exports = {
  Subject,
  Observer
}
