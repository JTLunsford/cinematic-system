///<reference path="../../typings/tsd.d.ts"/>
'use strict';
var _ = require('lodash');
var Basic = (function () {
    function Basic() {
    }
    Basic.roll = function (quantity, die) {
        if (quantity === void 0) { quantity = 1; }
        if (die === void 0) { die = 1; }
        return _.sum(_.map(new Array(quantity), function () {
            return 1 + Math.floor(Math.random() * die);
        }));
    };
    Basic.defaultConviction = 1;
    Basic.defaultRenown = 1;
    Basic.defaultWits = 1;
    return Basic;
})();
module.exports = Basic;
//# sourceMappingURL=basic.js.map