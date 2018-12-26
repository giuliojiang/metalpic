var isString = function(s: any): boolean {
    return typeof s === 'string' || s instanceof String;
}

var stringNullOrEmpty = function(s: any): boolean {
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

var sleep = function(duration: number): Promise<void> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, duration);
    });
}

var isNumber = function(n: any): boolean {
    return (typeof n === 'number') || n instanceof Number;
}

export {
    isString,
    stringNullOrEmpty,
    sleep,
    isNumber
}