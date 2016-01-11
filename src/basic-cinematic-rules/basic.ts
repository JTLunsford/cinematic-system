///<reference path="../../typings/tsd.d.ts"/>
'use strict';

import _ = require('lodash');

class Basic {
  public static defaultConviction: number = 1;
  public static defaultRenown: number = 1;
  public static defaultWits: number = 1;
  constructor(){

  }

  public static roll(quantity: number = 1, die: number = 1){

    return _.sum(_.map(new Array(quantity),()=>{
        return 1 + Math.floor(Math.random() * die);
      })
    );
  }
}


export = Basic;
