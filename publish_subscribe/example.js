'use strict'
/**
* Example: How can be used
*/

let PublishSubscribe = require('./index').PublishSubscribe

//Boss
function Boss() {}
Object.assign(Boss.prototype, PublishSubscribe()) //mixin PublishSubscribe in Boss object

//Goverment
function Goverment() {}
Object.assign(Goverment.prototype, PublishSubscribe()) //mixin PublishSubscribe in Goverment object

//Worker
function Worker() {
  let money = 0

  return {
    updateMoney(value) {
      return money += value
    },
    getMoney() {
      return money
    }
  }
}

module.exports = {
  Boss,
  Goverment,
  Worker
}
