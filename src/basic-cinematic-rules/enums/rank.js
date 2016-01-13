///<reference path="../../../typings/tsd.d.ts"/>
'use strict';
var rank;
(function (rank) {
    rank[rank["disabled"] = -4] = "disabled";
    rank[rank["weak"] = -3] = "weak";
    rank[rank["poor"] = -2] = "poor";
    rank[rank["fair"] = -1] = "fair";
    rank[rank["average"] = 0] = "average";
    rank[rank["trained"] = 1] = "trained";
    rank[rank["strong"] = 2] = "strong";
    rank[rank["heroic"] = 3] = "heroic";
    rank[rank["godlike"] = 4] = "godlike";
})(rank || (rank = {}));
module.exports = rank;
//# sourceMappingURL=rank.js.map