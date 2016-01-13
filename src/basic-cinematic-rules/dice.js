///<reference path="../../typings/tsd.d.ts"/>
'use strict';
var _ = require('lodash');
var dice = (function () {
    function dice() {
    }
    dice.roll = function (quantity, die, expanding) {
        if (quantity === void 0) { quantity = 1; }
        if (die === void 0) { die = 1; }
        if (expanding === void 0) { expanding = false; }
        var results = _.sum(_.map(new Array(quantity), function () {
            return 1 + Math.floor(Math.random() * die);
        }));
        return !expanding ? results : results === quantity * die ? results + dice.roll(1, die, expanding) : results;
    };
    return dice;
})();
module.exports = dice;
//# sourceMappingURL=dice.js.map