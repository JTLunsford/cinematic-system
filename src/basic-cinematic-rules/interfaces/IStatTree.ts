///<reference path="../../../typings/tsd.d.ts"/>


'use strict';

import _ = require('lodash');
import Rank = require('../enums/Rank');
import IStatModifier = require('./IStatModifier');
import IStat = require("./IStat");
import Wound = require("../enums/Wound");

interface IStatTree extends IStat{
  fuelStat:IStat;
  talentStats:IStat[];
  wound: Wound;
}

export = IStatTree;
