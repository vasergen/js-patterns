'use strict'

/**
* Observer Pattern
*/

//Subject
function Subject() {
  this.observes = new Set()

  this.addObserver = function functionName(observer) {
    return this.observes.add(observer)
  }

  this.deleteObserver = function(observer) {
    return this.observes.delete(observer)
  }

  this.notify = function(message, data) {
    this.observes.forEach((value, key) => {
      value.update(message, data)
    })
  }
}

//Observer
function Observer() {
  this.update = function(message, data) {}
}

//Naive Extend function
function extend( obj, extension ){
  for ( var key in extension ){
    obj[key] = extension[key];
  }
}

//Worker - Concrete Observer
function Worker(name) {
  this.name = name
}
extend(Worker.prototype, new Observer)
Worker.prototype.update = function (message, data) {
  if(message == 'money') {
    console.log(`${this.name}: Thanks boss, I've got ${data}. `);
  }
}

//Boss - Concrete Subject
function Boss() {}
extend(Boss.prototype, new Subject())

//Test
let worker1 = new Worker('worker1')
let worker2 = new Worker('worker2')
let boss = new Boss()

boss.addObserver(worker1)
boss.addObserver(worker2)
boss.notify('money', '1000$')
boss.deleteObserver(worker1)
boss.notify('money', '2000$')
