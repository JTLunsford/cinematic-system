///<reference path="../../typings/tsd.d.ts"/>
import uuid = require("node-uuid");
'use strict';
import ICharacter = require("./interfaces/ICharacter");
import _ = require('lodash');
import IItem = require("./interfaces/IItem");
import IItemOpts = require("./interfaces/IItemOpts");
import Tier = require("./enums/Tier");
import Slot = require("./enums/Slot");
import randopeep = require("randopeep");
import Dice = require('./Dice');

class Item{
  private id: string;
  private name: string;
  private statAffinity: string;
  private statModifier: number;
  private requiredTier: Tier;
  private slot: Slot;
  private value: number;
  private createdBy: ICharacter;
  private createdWhen: number;

  constructor(opts: IItemOpts){
    this.id = uuid.v4();
    this.name = opts.name;
    this.statAffinity = opts.statAffinity;
    this.statModifier = opts.statModifier;
    this.requiredTier = opts.requiredTier;
    this.slot = opts.slot;
    this.value = opts.value;
    this.createdBy = opts.createdBy;
    this.createdWhen = opts.createdWhen;
  }

  static RandomItem():Item{
    var stats = [
      'mind',
      'body',
      'soul',
      'conviction',
      'insight',
      'spirit',
      'heart',
      'resilience',
      'agility',
      'might',
      'vigor',
      'willpower',
      'wits',
      'intellect',
      'heart'
    ];
    return new Item({
      name:randopeep.invention(),
      statAffinity: _.first(_.shuffle(stats)),
      statModifier: 1,
      requiredTier: Tier.amatuer,
      slot:Slot[Slot[Dice.roll(1,5)-1]],
      value:Dice.roll(1,100),
      createdBy:{
        id:uuid.v4(),
        name:randopeep.name()
      },
      createdWhen: new Date().getTime()
    });
  }
}

export = Item;
