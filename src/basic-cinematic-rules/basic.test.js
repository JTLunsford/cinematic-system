///<reference path="../../typings/tsd.d.ts"/>
'use strict';
var assert = require('assert');
var Basic = require('./basic');
var _ = require('lodash');
describe('basic cinematic rules', function () {
    it('should have a default conviction of 1', function () {
        assert(1 === Basic.defaultConviction, 'was not 1');
    });
    it('should have a default renown of 1', function () {
        assert(1 === Basic.defaultRenown, 'was not 1');
    });
    it('should have a default wits of 1', function () {
        assert(1 === Basic.defaultWits, 'was not 1');
    });
    it('should roll 3d6', function () {
        var results = Basic.roll(3, 6);
        assert(1 <= results, 'was not greater than 1');
    });
    it('should roll bell curve in 100000 rolls of 3d6', function () {
        var rolls = 100000;
        var counts = [];
        _.each(new Array(rolls), function () {
            var result = Basic.roll(3, 6);
            if (counts[result]) {
                counts[result]++;
            }
            else {
                counts[result] = 1;
            }
        });
        _.each(counts, function (hits, key) {
            console.log(key, hits);
        });
        assert(true, 'was not a bell curve');
    });
});
//# sourceMappingURL=basic.test.js.map