///<reference path="../../typings/tsd.d.ts"/>
'use strict';

import assert = require('assert');

import Basic = require('./basic');

describe('basic cinematic rules', function () {
  it('should have a default conviction of 1', function () {
    var b = new Basic();
    assert(1 === Basic.defaultConviction, 'was not 1');
  });
});
