///<reference path="../../../typings/tsd.d.ts"/>
import IStatTree = require("./IStatTree");
'use strict';

import _ = require('lodash');
import Tier = require("../enums/Tier");
import ICharacter = require("./ICharacter");
import Slot = require("../enums/Slot");

interface IItemOpts {
  id?: string;
  name?: string;
  statAffinity?: string;
  statModifier?: number;
  requiredTier?: Tier;
  slot?: Slot;
  value?: number;
  createdBy?: ICharacter;
  createdWhen?: number;
}

export = IItemOpts;
