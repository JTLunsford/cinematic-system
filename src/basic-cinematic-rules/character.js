///<reference path="../../typings/tsd.d.ts"/>
'use strict';
var _ = require('lodash');
var rank = require('./enums/rank');
var randopeep = require('randopeep');
var character = (function () {
    function character(opts) {
        if (opts === void 0) { opts = {}; }
        this.name = opts.name ? opts.name : randopeep.name({});
        this.mind = opts.mind ? opts.mind : rank.average;
        this.body = opts.body ? opts.body : rank.average;
        this.soul = opts.soul ? opts.soul : rank.average;
        this.items = opts.items ? opts.items : _.map();
    }
    return character;
})();
module.exports = character;
//# sourceMappingURL=character.js.map