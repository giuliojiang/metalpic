"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var priv = {};
var set = function (conf) {
    priv.conf = conf;
};
exports.set = set;
var get = function () {
    if (priv.conf == null) {
        throw new Error("Conf is still null");
    }
    return priv.conf;
};
exports.get = get;
//# sourceMappingURL=conf.js.map