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

//Boss - Concrete Subject
function Boss() {}
Object.assign(Boss.prototype, new Subject()) //mixin Subject in Boss

//Worker - Concrete Observer
function Worker(name) {
  this.money = 0
  this.name = name
  this.updateMoney = function(money) {
    return this.money += parseInt(money)
  }
}
Object.assign(Worker.prototype, new Observer()) //mixin Observer in Worker
Worker.prototype.update = function (message, data) {
  if(message == 'money')
    this.updateMoney(data)
}

//Exports
module.exports = {
  Boss,
  Worker
}
