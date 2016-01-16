///<reference path="../../../typings/tsd.d.ts"/>
import ICharacter = require("./ICharacter");
'use strict';

import _ = require('lodash');
import Tier = require("../enums/Tier");

interface IItem {
  id: string;
  name: string;
  statAffinity: string;
  statModifier: number;
  requiredTier: Tier;
  slot?: string;
  value: number;
  createdBy: ICharacter;
  createdWhen: number;
}

export = IItem;
