'use strict'

/**
* Observer Pattern
*/

//Subject
function Subject() {
  this.observers = new Set()

  this.addObserver = function(observer) {
    return this.observers.add(observer)
  }

  this.deleteObserver = function(observer) {
    return this.observers.delete(observer)
  }

  this.notify = function(message, data) {
    this.observers.forEach(observer => observer.update(message, data))
  }
}

//Observer
function Observer() {
  this.update = function(message, data) {}
}

//Worker - Concrete Observer
function Worker(name) {
  this.name = name
}
Object.assign(Worker.prototype, new Observer())
Worker.prototype.update = function (message, data) {
  if(message == 'money') {
    console.log(`${this.name}: Thanks boss, I've got ${data}. `);
  }
}

//Boss - Concrete Subject
function Boss() {}
Object.assign(Boss.prototype, new Subject())

//Test
let worker1 = new Worker('worker1')
let worker2 = new Worker('worker2')
let boss = new Boss()

boss.addObserver(worker1)
boss.addObserver(worker2)
boss.notify('money', '1000$')
boss.deleteObserver(worker1)
boss.notify('money', '2000$')
