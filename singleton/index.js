'use strict'

/**
 * [Singleton description]
 * @param {[type]} ClassName [description]
 *
 * Explanation:
 * Usually entire logic of some class is inside Singleton, but for me it looks
 * better when it separated, so I take the class from outside, and then create
 * an instance of it. In this case it is easier to understand what's going on
 * and we don't have any garbage inside. So, as we see singlen have only one
 * public method getInstance
 */
function Singleton(ClassName) {
  let instance

  return {
    getInstance: function() {
      if(!instance)
        instance = new ClassName()

      return instance
    }
  }
}

//Expoprts
module.exports = {
  Singleton
}
