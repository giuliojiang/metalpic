"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const loggerFactory = __importStar(require("./logger"));
const express = require("express");
const mongoPic = __importStar(require("./mongo-pic"));
const mongoAlbum = __importStar(require("./mongo-album"));
const s3 = __importStar(require("./s3"));
const middleware_header_auth_1 = require("./middleware-header-auth");
const logger = loggerFactory.getLogger("route-image");
var imageHandler = function () {
    var app = express();
    let authenticator = new middleware_header_auth_1.HeaderAuthMiddleware();
    app.use(authenticator.checkAuthentication());
    app.get("/:imageid", async (req, res) => {
        try {
            // Get picture information from database
            let pic = await mongoPic.getPicture(req.params.imageid);
            logger.info("Got pic: " + JSON.stringify(pic));
            // Check if picture exists
            if (pic == null) {
                res.sendStatus(400);
                return;
            }
            // Check if picture is ready
            if (!pic.ready) {
                res.sendStatus(400);
                return;
            }
            // Get album of this pic
            let album = await mongoAlbum.getAlbumById(pic.albumid);
            if (album == null) {
                logger.info(`Picture ${pic._id} has associated album ${pic.albumid} which does not exist`);
                res.sendStatus(500);
                return;
            }
            if (!album.public) {
                let isUserAdmin = req["metalpic_authenticated"];
                if (!isUserAdmin) {
                    logger.info("User is unauthorized to view this picture");
                    res.sendStatus(401);
                    return;
                }
            }
            // Get the object from S3
            let stream = s3.openFileAsStream(pic._id.toString());
            stream.pipe(res);
        }
        catch (err) {
            logger.error("Error occurred", err);
            res.sendStatus(500);
        }
    });
    return app;
};
exports.imageHandler = imageHandler;
//# sourceMappingURL=route-image.js.map