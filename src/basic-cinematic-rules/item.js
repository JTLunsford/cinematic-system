///<reference path="../../typings/tsd.d.ts"/>
var uuid = require("node-uuid");
'use strict';
var _ = require('lodash');
var Tier = require("./enums/Tier");
var Slot = require("./enums/Slot");
var randopeep = require("randopeep");
var Dice = require('./Dice');
var Item = (function () {
    function Item(opts) {
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
    Item.RandomItem = function () {
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
            name: randopeep.invention(),
            statAffinity: _.first(_.shuffle(stats)),
            statModifier: 1,
            requiredTier: Tier.amatuer,
            slot: Slot[Slot[Dice.roll(1, 5) - 1]],
            value: Dice.roll(1, 100),
            createdBy: {
                id: uuid.v4(),
                name: randopeep.name()
            },
            createdWhen: new Date().getTime()
        });
    };
    return Item;
})();
module.exports = Item;
//# sourceMappingURL=Item.js.map