///<reference path="../../typings/tsd.d.ts"/>
var Wound = require("./enums/Wound");
'use strict';
var CharacterStatic = (function () {
    function CharacterStatic() {
    }
    CharacterStatic.InitializeMind = function (rank) {
        return {
            name: 'mind',
            baseStat: rank,
            currentStat: rank,
            wound: Wound.none,
            statHistory: [],
            fuelStat: {
                name: 'heart',
                baseStat: rank,
                currentStat: rank,
                statHistory: []
            },
            talentStats: [
                {
                    name: 'intellect',
                    baseStat: rank,
                    currentStat: rank,
                    statHistory: []
                },
                {
                    name: 'wits',
                    baseStat: rank,
                    currentStat: rank,
                    statHistory: []
                },
                {
                    name: 'willpower',
                    baseStat: rank,
                    currentStat: rank,
                    statHistory: []
                }
            ]
        };
    };
    CharacterStatic.InitializeBody = function (rank) {
        return {
            name: 'body',
            baseStat: rank,
            currentStat: rank,
            wound: Wound.none,
            statHistory: [],
            fuelStat: {
                name: 'vigor',
                baseStat: rank,
                currentStat: rank,
                statHistory: []
            },
            talentStats: [
                {
                    name: 'might',
                    baseStat: rank,
                    currentStat: rank,
                    statHistory: []
                },
                {
                    name: 'agility',
                    baseStat: rank,
                    currentStat: rank,
                    statHistory: []
                },
                {
                    name: 'resilience',
                    baseStat: rank,
                    currentStat: rank,
                    statHistory: []
                }
            ]
        };
    };
    CharacterStatic.InitializeSoul = function (rank) {
        return {
            name: 'soul',
            baseStat: rank,
            currentStat: rank,
            wound: Wound.none,
            statHistory: [],
            fuelStat: {
                name: 'heart',
                baseStat: rank,
                currentStat: rank,
                statHistory: []
            },
            talentStats: [
                {
                    name: 'spirit',
                    baseStat: rank,
                    currentStat: rank,
                    statHistory: []
                },
                {
                    name: 'insight',
                    baseStat: rank,
                    currentStat: rank,
                    statHistory: []
                },
                {
                    name: 'conviction',
                    baseStat: rank,
                    currentStat: rank,
                    statHistory: []
                }
            ]
        };
    };
    return CharacterStatic;
})();
module.exports = CharacterStatic;
//# sourceMappingURL=CharacterStatic.js.map