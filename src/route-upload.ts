import express = require("express");
import * as conf from "./conf";
import * as authentication from "./authentication";
import * as fs from "fs";
import * as mongopic from "./mongo-pic";
import * as loggerFactory from "./logger";
import * as mongoalbum from "./mongo-album";
import * as s3 from "./s3";
import * as path from "path";

const logger = loggerFactory.getLogger("route-upload");

var createUploadDir = async function(): Promise<void> {
    let uploadDir = path.resolve(conf.get().uploadDir);
    let mkdirPromise = new Promise((resolve, reject) => {
        fs.mkdir(uploadDir, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve()
            }
        })
    });
    try {
        await mkdirPromise;
    } catch (err) {
        logger.error("Creating upload dir", err);
    }
}

var uploadHandler = function(): express.Express {
    var app = express();

    app.post("/:album/:name/:token", async (req, res) => {
        try {
            logger.info("Album name is " + req.params.album);
            var token = req.params.token;
            logger.info("Token is " + token);
            var user = await authentication.authenticate(token);

            // Check user
            let allowedUsers = conf.get().allowedUsers;
            if (!allowedUsers.has(user.id)) {
                logger.info("Unauthorized");
                res.sendStatus(403);``
                return;
            }

            // Get album
            let theAlbum = await mongoalbum.getAlbumByName(req.params.album);
            if (theAlbum == null) {
                res.sendStatus(400);
                return;
            }
            let albumid = theAlbum._id.toString();

            // Insert into pic collection
            let picId = await mongopic.insertPic(req.params.name, albumid);
            logger.info("Inserted pic id is " + picId);

            var newFilePath = path.resolve(conf.get().uploadDir, picId);
            logger.info("Saving to " + newFilePath);
            var filestream = fs.createWriteStream(newFilePath);
            await req.pipe(filestream);
            filestream.on("finish", async () => {
                // Upload to S3
                await s3.uploadFile(newFilePath, picId);
                logger.info("Uploaded to S3");

                // Update the status of the file in mongo
                await mongopic.setAsReady(picId);

                res.send("Completed");
            });
        } catch (err) {
            logger.error("Error occurred", err);
            res.sendStatus(500);
        }
    });

    return app;
}

export {
    uploadHandler,
    createUploadDir
}