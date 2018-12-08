const path = require("path");
const express = require("express");
const conf = require(path.resolve(__dirname, "conf.js"));
const authentication = require(path.resolve(__dirname, "authentication.js"));
const fs = require("fs");
const mongopic = require(path.resolve(__dirname, "mongo-pic.js"));
const logger = require(path.resolve(__dirname, "logger.js")).getLogger("route-upload");
const mongoalbum = require(path.resolve(__dirname, "mongo-album.js"));

module.exports.uploadHandler = function() {
    var app = express();

    app.post("/:album/:name/:token", async (req, res) => {
        try {
            logger.info("Album name is " + req.params.album);
            var token = req.params.token;
            logger.info("Token is " + token);
            var user = await authentication.authenticate(token);
            var username = user.name;
            logger.info("User is " + username);

            // Create album if not exists
            let albumid = await mongoalbum.createAlbum(req.params.album);

            // Insert into pic collection
            let picId = await mongopic.insertPic(req.params.name, albumid);
            logger.info("Inserted pic id is " + picId);

            var newFilePath = path.resolve(conf.get().uploadDir, picId);
            logger.info("Saving to " + newFilePath);
            var filestream = fs.createWriteStream(newFilePath);
            await req.pipe(filestream);
            filestream.on("finish", () => {
                // TODO upload to S3

                // TODO update the status of the file in mongo

                res.send("Completed");
            });
        } catch (err) {
            logger.error("Error occurred", err);
            res.sendStatus(500);
        }
    });

    return app;
}