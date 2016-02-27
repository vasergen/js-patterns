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

//Worker - Concrete Observer
function Worker(name) {
  this.name = name
}
Worker.prototype = new Observer()
Worker.prototype.update = function (message, data) {
  if(message == 'money') {
    console.log(`${this.name}: Thanks boss, I've got ${data}. `);
  }
}

//Employer - Concrete Subject
function Employer() {}
Employer.prototype = new Subject()

//Test
let worker1 = new Worker('worker1')
let worker2 = new Worker('worker2')
let employer = new Employer()

employer.addObserver(worker1)
employer.addObserver(worker2)
employer.notify('money', '1000$')
employer.deleteObserver(worker1)
employer.notify('money', '2000$')
