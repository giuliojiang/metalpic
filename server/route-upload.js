const path = require("path");
const express = require("express");
const conf = require(path.resolve(__dirname, "conf.js"));
const authentication = require(path.resolve(__dirname, "authentication.js"));
const fs = require("fs");

module.exports.uploadHandler = function() {
    var app = express();

    app.post("/:album/:name/:token", async (req, res) => {
        console.info("Album name is " + req.params.album);
        var newFilePath = path.resolve(conf.get().uploadDir, req.params.name);
        console.info("Saving to " + newFilePath);
        var token = req.params.token;
        console.info("Token is " + token);
        var user = await authentication.authenticate(token);
        var username = user.name;
        console.info("User is " + username);
        var filestream = fs.createWriteStream(newFilePath);
        await req.pipe(filestream);
        filestream.on("finish", () => {
            res.send("Completed");
        });
    });

    return app;
}