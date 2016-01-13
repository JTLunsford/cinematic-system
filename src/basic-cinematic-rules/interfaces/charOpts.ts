///<reference path="../../../typings/tsd.d.ts"/>
'use strict';

import _ = require('lodash');
import item = require("../item");
import rank = require('../enums/rank');

interface charOpts {
  name?:string;
  mind?:rank;
  body?:rank;
  soul?:rank;
  items?:item[];
}

export = charOpts;
