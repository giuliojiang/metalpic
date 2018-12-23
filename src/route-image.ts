import * as loggerFactory from "./logger";
import express = require("express");
import * as authentication from "./authentication";
import * as mongoPic from "./mongo-pic";
import * as mongoAlbum from "./mongo-album";
import * as s3 from "./s3";

const logger = loggerFactory.getLogger("route-image");

var imageHandler = function(): express.Express {
    var app = express();

    app.get("/:imageid", async (req: express.Request, res) => {
        try {
            // Authenticate from headers
            let user = await authentication.authenticateFromHttpHeaders(req);

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
                if (!authentication.isUserAdmin(user)) {
                    logger.info("User is unauthorized to view this picture");
                    res.sendStatus(401);
                    return;
                }
            }

            // Get the object from S3
            let stream = s3.openFileAsStream(pic._id);
            stream.pipe(res);

        } catch (err) {
            logger.error("Error occurred", err);
            res.sendStatus(500);
        }
    });

    return app;
}

export {
    imageHandler
}