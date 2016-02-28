'use strict'

let assert = require('assert')
let observerExample = require('../observer/example')
let Boss = observerExample.Boss
let Worker = observerExample.Worker

describe('Observer Pattern', () => {
  let worker1 = new Worker
  let worker2 = new Worker
  let boss = new Boss

  it('add observer', () => {
      boss.addObserver(worker1)
      boss.addObserver(worker2)
      boss.notify('money', 1000)

      assert.equal(1000, worker1.getMoney())
      assert.equal(1000, worker2.getMoney())
  })

  it('delete observer', () => {
    boss.deleteObserver(worker1)
    boss.notify('money', 2000)

    assert.equal(1000, worker1.getMoney())
    assert.equal(3000, worker2.getMoney())
  })
})
