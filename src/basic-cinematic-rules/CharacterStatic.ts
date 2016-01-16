///<reference path="../../typings/tsd.d.ts"/>
import Wound = require("./enums/Wound");
'use strict';

import Rank = require('./enums/Rank');
import IStatTree = require('./interfaces/IStatTree');

class CharacterStatic{
  static InitializeMind(rank:Rank):IStatTree{
    return {
      name:'mind',
      baseStat:rank,
      currentStat:rank,
      wound: Wound.none,
      statHistory:[],
      fuelStat: {
        name:'heart',
        baseStat:rank,
        currentStat:rank,
        statHistory:[]
      },
      talentStats:[
        {
          name:'intellect',
          baseStat:rank,
          currentStat:rank,
          statHistory:[]
        },
        {
          name:'wits',
          baseStat:rank,
          currentStat:rank,
          statHistory:[]
        },
        {
          name:'willpower',
          baseStat:rank,
          currentStat:rank,
          statHistory:[]
        }
      ]
    };
  }

  static InitializeBody(rank:Rank):IStatTree{
    return {
      name:'body',
      baseStat:rank,
      currentStat:rank,
      wound: Wound.none,
      statHistory:[],
      fuelStat: {
        name:'vigor',
        baseStat:rank,
        currentStat:rank,
        statHistory:[]
      },
      talentStats:[
        {
          name:'might',
          baseStat:rank,
          currentStat:rank,
          statHistory:[]
        },
        {
          name:'agility',
          baseStat:rank,
          currentStat:rank,
          statHistory:[]
        },
        {
          name:'resilience',
          baseStat:rank,
          currentStat:rank,
          statHistory:[]
        }
      ]
    };
  }

  static InitializeSoul(rank:Rank):IStatTree{
    return {
      name:'soul',
      baseStat:rank,
      currentStat:rank,
      wound: Wound.none,
      statHistory:[],
      fuelStat: {
        name:'heart',
        baseStat:rank,
        currentStat:rank,
        statHistory:[]
      },
      talentStats:[
        {
          name:'spirit',
          baseStat:rank,
          currentStat:rank,
          statHistory:[]
        },
        {
          name:'insight',
          baseStat:rank,
          currentStat:rank,
          statHistory:[]
        },
        {
          name:'conviction',
          baseStat:rank,
          currentStat:rank,
          statHistory:[]
        }
      ]
    };
  }
}

export = CharacterStatic;
