'use strict';

const welcome = require('../lib/greet.js');

const assert = require('assert');

describe('Greet Module', function(){
  describe('#sayHello', function(){
    it('Should return "hello regan"', function(){
      var outcome = welcome.greet('regan');
      assert.ok(outcome === 'hello regan', 'not equal to "hello regan"');
    })//end it
  })//end describe - '#sayHello'
})//end describe - 'Greet Module'
