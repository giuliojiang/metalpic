"use strict";

window.utils = {};

utils.isString = function(s) {
    return typeof s === 'string' || s instanceof String
}

utils.stringNullOrEmpty = function(s) {
    if (s == null) {
        return true;
    }
    if (!utils.isString(s)) {
        return true;
    }
    if (s == "") {
        return true;
    }
    return false;
}