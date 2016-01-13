///<reference path="../../typings/tsd.d.ts"/>
'use strict';

import _ = require('lodash');

class dice {
  public static roll(quantity: number = 1, die: number = 1, expanding:boolean = false){

    var results = _.sum(_.map(new Array(quantity),()=>{
        return 1 + Math.floor(Math.random() * die);
      })
    );

    return !expanding ? results : results === quantity*die ? results + dice.roll(1,die,expanding) : results;
  }

}

export = dice;
