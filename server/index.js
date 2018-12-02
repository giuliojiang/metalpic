const path = require("path");
const express = require("express");
const routeUpload = require(path.resolve(__dirname, "route-upload.js"));
const conf = require(path.resolve(__dirname, "conf.js"));

module.exports.createApp = function(config) {
    conf.set(config);
    var app = express();
    app.use("/", express.static(path.resolve(__dirname, "..", "www")));
    app.use("/api/upload", routeUpload.uploadHandler());
    return app;
};