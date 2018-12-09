var priv = {};
// priv.conf has: 
// googleClientId: string
// bucket: string
// uploadDir: string
// mongoUrl: string
// mongoDb: string
// allowedUsers: Set<string>. Each string is a google client id, such as "351687914965195298"

module.exports.set = function(conf) {
    priv.conf = conf;
}

module.exports.get = function() {
    if (priv.conf == null) {
        throw new Error("Conf is still null");
    }
    return priv.conf;
}