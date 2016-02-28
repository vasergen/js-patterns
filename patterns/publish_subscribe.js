'use strict'

/**
* Pattern: PublishSubscribe
*/

//PublishSubscribe
function PublishSubscribe() {
  //Private
  let topics = new Map()

  function getEvent(event) {
    if(!topics.has(event))
      topics.set(event, new Set())

    return topics.get(event)
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

//Event Object
function Event() {}
Object.assign(Event.prototype, PublishSubscribe())

//Example, how to use 
let event = new Event()
let subscriber1 = data => console.log(`subscriber1: I've got ${data}`)
let subscriber2 = data => console.log(`subscriber2: I've got ${data}`)

event.subscribe('money', subscriber1)
event.subscribe('money', subscriber2)
event.publish('money', '1000$')
event.unsubscribe('money', subscriber1)
event.publish('money', '2000$')
