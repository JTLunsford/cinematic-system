///<reference path="../../typings/tsd.d.ts"/>
'use strict';

import assert = require('assert');

import character = require('./character');

import _ = require('lodash');

describe('character', function () {
  it('should be created', function () {
    var npc = new character();
    console.log(npc);
    assert(true, '....');
  });
});
