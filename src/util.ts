var isString = function(s: any) {
    return typeof s === 'string' || s instanceof String;
}

var stringNullOrEmpty = function(s: any) {
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
}

var sleep = function(duration: number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, duration);
    });
}

export {
    isString,
    stringNullOrEmpty,
    sleep
}