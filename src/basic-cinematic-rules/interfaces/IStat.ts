///<reference path="../../../typings/tsd.d.ts"/>
'use strict';

import _ = require('lodash');
import Rank = require('../enums/Rank');
import IStatModifier = require('./IStatModifier');

interface IStat {
  name:string;
  baseStat:Rank;
  currentStat:Rank;
  statHistory:IStatModifier[];
}

export = IStat;
