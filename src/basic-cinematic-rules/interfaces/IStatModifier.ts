///<reference path="../../../typings/tsd.d.ts"/>

'use strict';

import _ = require('lodash');
import Rank = require('../enums/Rank');
import Tier = require("../enums/Tier");
import IItem = require("./IItem");

interface IStatModifier {
  statModifier:number;
  givenFrom:IItem|Tier;
}

export = IStatModifier;
