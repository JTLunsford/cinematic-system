///<reference path="../../../typings/tsd.d.ts"/>
'use strict';
var conclusion;
(function (conclusion) {
    conclusion[conclusion["catastrophic"] = -4] = "catastrophic";
    conclusion[conclusion["failure"] = -3] = "failure";
    conclusion[conclusion["miss"] = -2] = "miss";
    conclusion[conclusion["graze"] = -1] = "graze";
    conclusion[conclusion["success"] = 0] = "success";
    conclusion[conclusion["calculated"] = 1] = "calculated";
    conclusion[conclusion["masterful"] = 2] = "masterful";
    conclusion[conclusion["perfect"] = 3] = "perfect";
    conclusion[conclusion["triumph"] = 4] = "triumph";
})(conclusion || (conclusion = {}));
module.exports = conclusion;
//# sourceMappingURL=conclusion.js.map