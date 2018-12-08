module.exports.isString = function(s) {
    return typeof s === 'string' || s instanceof String;
}

module.exports.stringNullOrEmpty = function(s) {
    if (s == null) {
        return true;
    }
    if (!module.exports.isString(s)) {
        return true;
    }
    if (s == "") {
        return true;
    }
    return false;
}

module.exports.sleep = function(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, duration);
    });
}