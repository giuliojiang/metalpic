interface Conf {
    googleClientId: string,
    bucket: string,
    uploadDir: string,
    mongoUrl: string,
    allowedUsers: Set<string>
}

var priv: {
    conf?: Conf
} = {};

var set = function(conf: Conf): void {
    priv.conf = conf;
}

var get = function(): Conf {
    if (priv.conf == null) {
        throw new Error("Conf is still null");
    }
    return priv.conf;
}

export {
    set,
    get,
    Conf
}