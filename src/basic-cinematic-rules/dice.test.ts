///<reference path="../../typings/tsd.d.ts"/>
'use strict';

import assert = require('assert');

import Dice = require('./Dice');

import _ = require('lodash');

describe('Dice', function () {
  it('should roll 3d6', function () {
    var results = Dice.roll(3,6);
    assert(1 <= results, 'was not greater than 1');
  });

  it('should roll bell curve in 100000 rolls of 3d6', function () {
    var rolls = 100000;
    var counts = [];
    _.each(new Array(rolls),()=>{
      var result = Dice.roll(3,6);
      if(counts[result]){
        counts[result]++;
      }
      else{
        counts[result]=1;
      }
    });
    var highValue = 0;
    var highDie = 0;
    _.each(counts,(hits,key)=>{
      if(hits>highValue){
        highValue = hits;
        highDie = key;
      }
    });

    assert(highDie > 9 && highDie < 12, 'was not a bell curve between 10 and 11');
  });

  it('should roll expanded Dice in 10000 rolls', function () {
    var rolls = 10000;
    var highValue = 0;
    _.each(new Array(rolls),()=>{
      var result = Dice.roll(3,6,true);
      highValue = result > highValue ? result : highValue;
    });
    assert(highValue > 18, 'did not roll expanded Dice');
  });

});
