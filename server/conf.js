var priv = {};
// conf has: 
// googleClientId
// bucket
// uploadDir

module.exports.set = function(conf) {
    priv.conf = conf;
}

module.exports.get = function() {
    if (priv.conf == null) {
        throw new Error("Conf is still null");
    }
    return priv.conf;
}