"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isString = function (s) {
    return typeof s === 'string' || s instanceof String;
};
exports.isString = isString;
var stringNullOrEmpty = function (s) {
    if (s == null) {
        return true;
    }
    if (!isString(s)) {
        return true;
    }
    if (s == "") {
        return true;
    }
    return false;
};
exports.stringNullOrEmpty = stringNullOrEmpty;
var sleep = function (duration) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, duration);
    });
};
exports.sleep = sleep;
var isNumber = function (n) {
    return (typeof n === 'number') || n instanceof Number;
};
exports.isNumber = isNumber;
//# sourceMappingURL=util.js.map