'use strict'

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

//=====Example of usage=====
let boss = new Boss()
let goverment = new Goverment()
let workerA = new Worker()
let workerB = new Worker()

boss.subscribe('salary', workerA.updateMoney)
boss.subscribe('salary', workerB.updateMoney)
goverment.subscribe('taxesA', workerA.updateMoney)
goverment.subscribe('taxesB', workerB.updateMoney)

boss.publish('salary', 2000)
goverment.publish('taxesA', -500)
goverment.publish('taxesB', -1000)

workerA.getMoney() //1500
workerB.getMoney() //1000
//==========================


//Exports
module.exports = {
  Boss,
  Goverment,
  Worker
}
