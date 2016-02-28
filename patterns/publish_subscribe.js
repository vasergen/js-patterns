'use strict'

/**
* Pattern: PublishSubscribe
*/

//PublishSubscribe
function PublishSubscribe() {
  //Private
  let events = new Map()

  function getEvent(event) {
    if(!events.has(event))
      events.set(event, new Set())

    return events.get(event)
  }

  //Public
  return {
    subscribe(event, listener) {
      getEvent(event).add(listener)
    },
    unsubscribe(event, listener) {
      getEvent(event).delete(listener)
    },
    publish(event, data) {
      getEvent(event).forEach(listener => listener(data))
    }
  }
}

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

//Boss
function Boss() {}
Object.assign(Boss.prototype, PublishSubscribe()) //mixin PublishSubscribe in Boss object

//Goverment
function Goverment() {}
Object.assign(Goverment.prototype, PublishSubscribe()) //mixin PublishSubscribe in Goverment object

//Exports
module.exports = {
  Worker,
  Boss,
  Goverment
}
