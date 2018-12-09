const path = require("path");
const express = require("express");
const routeUpload = require(path.resolve(__dirname, "route-upload.js"));
const conf = require(path.resolve(__dirname, "conf.js"));
const mongoose = require(path.resolve(__dirname, "mongoose.js"));

module.exports.createApp = async function(config) {
    // init
    conf.set(config);
    await mongoose.connect();

    var app = express();
    app.use("/", express.static(path.resolve(__dirname, "..", "www")));
    app.use("/api/upload", routeUpload.uploadHandler());
    return app;
};