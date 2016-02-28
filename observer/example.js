'use strict'

let observer = require('./index')
let Subject = observer.Subject
let Observer = observer.Observer

//Boss - Concrete Subject
function Boss() {}
//lets mixin Subject in Boss
Object.assign(Boss.prototype, new Subject())

//Worker - Concrete Observer
function Worker() {
  //private
  let money = 0

  //public
  this.updateMoney = function(value) {
    return money += value
  }

  this.getMoney = function() {
    return money
  }
}

//lets mixin Observer in Worker
Object.assign(Worker.prototype, new Observer())

//implemention update function, actually we already have it,
//but for now it is doing nothing so, lets add some logic inside of it
Worker.prototype.update = function (message, data) {
  if(message == 'money')
    this.updateMoney(data)
}

//Exports
module.exports = {
  Boss,
  Worker
}
