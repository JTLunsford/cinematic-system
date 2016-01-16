///<reference path="../../../typings/tsd.d.ts"/>
import IStatTree = require("./IStatTree");
'use strict';

import _ = require('lodash');
import Item = require("../Item");
import rank = require('../enums/Rank');
import Tier = require("../enums/Tier");

interface ICharOpts {
  name?:string;
  tier?:Tier;
  mind?:IStatTree;
  body?:IStatTree;
  soul?:IStatTree;
  items?:Item[];
}

export = ICharOpts;
