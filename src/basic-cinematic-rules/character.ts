///<reference path="../../typings/tsd.d.ts"/>

import Wound = require("./enums/Wound");
'use strict';

import _ = require('lodash');
import uuid = require('node-uuid');
import Rank = require('./enums/Rank');
import ICharOpts =require('./interfaces/ICharOpts');
import randopeep = require('randopeep');
import Item = require("./Item");
import Dice = require("./Dice");
import ICharacter = require('./interfaces/ICharacter');
import IStatTree = require('./interfaces/IStatTree');
import CharacterStatic = require('./CharacterStatic');
import Tier = require("./enums/Tier");
import Slot = require("./enums/Slot");

class Character extends CharacterStatic{
  private id: string;
  private mind: IStatTree;
  private body: IStatTree;
  private soul: IStatTree;
  private name: string;
  private tier: Tier;
  private items: Item[];

  constructor(opts:ICharOpts = {}){

    this.id = uuid.v4();
    this.name = opts.name ? opts.name : randopeep.name({});
    this.mind = opts.mind ? opts.mind : Character.InitializeMind(Rank.average);
    this.body = opts.body ? opts.body : Character.InitializeBody(Rank.average);
    this.soul = opts.soul ? opts.soul : Character.InitializeSoul(Rank.average);
    this.tier = opts.tier ? opts.tier : Tier.amatuer;
    this.items = opts.items;

    super();
  }

  getId():ICharacter{
    return {
      id: this.id,
      name: this.name
    }
  }

  static StatReplacer (key, value):any {
    var statKeys = [
      'baseStat',
      'currentStat'
    ];
    if(_.any(statKeys,(k)=>{return k===key;})){
      return Rank[value]+'('+value+')';
    }
    var woundKeys = [
      'wound'
    ];
    if(_.any(woundKeys,(k)=>{return k===key;})){
      return Wound[value]+'('+value+')';
    }
    var tierKeys = [
      'tier',
      'requiredTier'
    ];
    if(_.any(tierKeys,(k)=>{return k===key;})){
      return Tier[value]+'('+value+')';
    }
    var slotKeys = [
      'slot'
    ];
    if(_.any(slotKeys,(k)=>{return k===key;})){
      return Slot[value]+'('+value+')';
    }
    var dateKeys = [
      'createdWhen'
    ];
    if(_.any(dateKeys,(k)=>{return k===key;})){
      return new Date(value).toString();
    }



    return value;
  }

  static RandomNpc():Character {
    return new Character({
      mind:Character.InitializeMind(Dice.roll(1,8)-4),
      body:Character.InitializeBody(Dice.roll(1,8)-4),
      soul:Character.InitializeSoul(Dice.roll(1,8)-4),
      items: _.map<any[],Item>(new Array(Dice.roll(1,3)),()=>{
        return Item.RandomItem();
      })
    });

  }

}

export = Character;
