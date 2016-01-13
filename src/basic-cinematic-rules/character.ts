///<reference path="../../typings/tsd.d.ts"/>
'use strict';

import _ = require('lodash');

import rank = require('./enums/rank');
import charOpts =require('./interfaces/charOpts');
import randopeep = require('randopeep');
import item = require("./item");
import dice = require("./dice");

class character {
  private mind: rank;
  private body: rank;
  private soul: rank;
  private name: string;
  private items: item[];

  constructor(opts:charOpts = {}){
    this.name = opts.name ? opts.name : randopeep.name({});
    this.mind = opts.mind ? opts.mind : rank.average;
    this.body = opts.body ? opts.body : rank.average;
    this.soul = opts.soul ? opts.soul : rank.average;
    this.items = opts.items ? opts.items : _.map()

  }

}

export = character;
