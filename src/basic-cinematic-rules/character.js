///<reference path="../../typings/tsd.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Wound = require("./enums/Wound");
'use strict';
var _ = require('lodash');
var uuid = require('node-uuid');
var Rank = require('./enums/Rank');
var randopeep = require('randopeep');
var Item = require("./Item");
var Dice = require("./Dice");
var CharacterStatic = require('./CharacterStatic');
var Tier = require("./enums/Tier");
var Slot = require("./enums/Slot");
var Character = (function (_super) {
    __extends(Character, _super);
    function Character(opts) {
        if (opts === void 0) { opts = {}; }
        this.id = uuid.v4();
        this.name = opts.name ? opts.name : randopeep.name({});
        this.mind = opts.mind ? opts.mind : Character.InitializeMind(Rank.average);
        this.body = opts.body ? opts.body : Character.InitializeBody(Rank.average);
        this.soul = opts.soul ? opts.soul : Character.InitializeSoul(Rank.average);
        this.tier = opts.tier ? opts.tier : Tier.amatuer;
        this.items = opts.items;
        _super.call(this);
    }
    Character.prototype.getId = function () {
        return {
            id: this.id,
            name: this.name
        };
    };
    Character.StatReplacer = function (key, value) {
        var statKeys = [
            'baseStat',
            'currentStat'
        ];
        if (_.any(statKeys, function (k) { return k === key; })) {
            return Rank[value] + '(' + value + ')';
        }
        var woundKeys = [
            'wound'
        ];
        if (_.any(woundKeys, function (k) { return k === key; })) {
            return Wound[value] + '(' + value + ')';
        }
        var tierKeys = [
            'tier',
            'requiredTier'
        ];
        if (_.any(tierKeys, function (k) { return k === key; })) {
            return Tier[value] + '(' + value + ')';
        }
        var slotKeys = [
            'slot'
        ];
        if (_.any(slotKeys, function (k) { return k === key; })) {
            return Slot[value] + '(' + value + ')';
        }
        var dateKeys = [
            'createdWhen'
        ];
        if (_.any(dateKeys, function (k) { return k === key; })) {
            return new Date(value).toString();
        }
        return value;
    };
    Character.RandomNpc = function () {
        return new Character({
            mind: Character.InitializeMind(Dice.roll(1, 8) - 4),
            body: Character.InitializeBody(Dice.roll(1, 8) - 4),
            soul: Character.InitializeSoul(Dice.roll(1, 8) - 4),
            items: _.map(new Array(Dice.roll(1, 3)), function () {
                return Item.RandomItem();
            })
        });
    };
    return Character;
})(CharacterStatic);
module.exports = Character;
//# sourceMappingURL=Character.js.map