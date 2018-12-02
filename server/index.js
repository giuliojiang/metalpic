const path = require("path");
const express = require("express");

var priv = {};
priv.conf = null;
// conf has: googleClientId

module.exports.createApp = function(conf) {
    priv.conf = conf;
    var app = express();
    app.use("/", express.static(path.resolve(__dirname, "..", "www")));
    return app;
};

module.exports.getConf = function() {
    return priv.conf;
};