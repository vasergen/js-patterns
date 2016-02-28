'use strict'

let assert = require('assert')
let observer = require('../patterns/observer')
let Boss = observer.Boss
let Worker = observer.Worker

describe('Observer Pattern', () => {
  let worker1 = new Worker('worker1')
  let worker2 = new Worker('worker2')
  let boss = new Boss()

  it('check names', () => {
    assert.equal('worker1', worker1.name)
    assert.equal('worker2', worker2.name)
  })

  it('add observer', () => {
      boss.addObserver(worker1)
      boss.addObserver(worker2)
      boss.notify('money', 1000)

      assert.equal(1000, worker1.money)
      assert.equal(1000, worker2.money)
  })

  it('delete observer', () => {
    boss.deleteObserver(worker1)
    boss.notify('money', 2000)

    assert.equal(1000, worker1.money)
    assert.equal(3000, worker2.money)
  })
})
