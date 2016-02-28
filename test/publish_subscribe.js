'use strict'

let assert = require('assert')
let pubsub = require('../patterns/publish_subscribe')
let Worker = pubsub.Worker
let Boss = pubsub.Boss
let Goverment = pubsub.Goverment

describe('Publish Subscribe Pattern', () => {
  let boss = new Boss()
  let goverment = new Goverment()
  let workerA = new Worker()
  let workerB = new Worker()

  it('check subscribe and publish', () => {
    boss.subscribe('salary', workerA.updateMoney)
    boss.subscribe('salary', workerB.updateMoney)
    goverment.subscribe('taxesA', workerA.updateMoney)
    goverment.subscribe('taxesB', workerB.updateMoney)

    boss.publish('salary', 2000)
    goverment.publish('taxesA', -500)
    goverment.publish('taxesB', -1000)

    assert.equal(2000 - 500, workerA.getMoney())
    assert.equal(2000 - 1000, workerB.getMoney())
  })

  it('check unsubscribe and publish', () => {
    boss.unsubscribe('salary', workerA.updateMoney)
    boss.publish('salary', 2000)

    assert.equal(2000 - 500, workerA.getMoney())
    assert.equal(2000 - 1000 + 2000, workerB.getMoney())
  })
})
