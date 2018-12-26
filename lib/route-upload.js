"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const conf = __importStar(require("./conf"));
const fs = __importStar(require("fs"));
const mongopic = __importStar(require("./mongo-pic"));
const loggerFactory = __importStar(require("./logger"));
const mongoalbum = __importStar(require("./mongo-album"));
const s3 = __importStar(require("./s3"));
const path = __importStar(require("path"));
const middleware_header_auth_1 = require("./middleware-header-auth");
const logger = loggerFactory.getLogger("route-upload");
var createUploadDir = async function () {
    let uploadDir = path.resolve(conf.get().uploadDir);
    let mkdirPromise = new Promise((resolve, reject) => {
        fs.mkdir(uploadDir, (err) => {
            if (err) {
                reject(err);
            }
            else {
                resolve();
            }
        });
    });
    try {
        await mkdirPromise;
    }
    catch (err) {
        logger.error("Creating upload dir", err);
    }
};
exports.createUploadDir = createUploadDir;
var uploadHandler = function () {
    var app = express();
    let authenticator = new middleware_header_auth_1.HeaderAuthMiddleware();
    app.use(authenticator.requireAuthentication());
    app.post("/:album/:name", async (req, res) => {
        try {
            logger.info("Album name is " + req.params.album);
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
        }
        catch (err) {
            logger.error("Error occurred", err);
            res.sendStatus(500);
        }
    });
    return app;
};
exports.uploadHandler = uploadHandler;
//# sourceMappingURL=route-upload.js.map