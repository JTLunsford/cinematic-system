///<reference path="../../typings/tsd.d.ts"/>
'use strict';

import assert = require('assert');
import Basic = require('./basic');

describe('basic cinematic rules', function () {
  it('should be true', function () {
    var b = new Basic();
    assert(b, 'was not true');
  });
});

