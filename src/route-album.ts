import express = require("express");
import * as loggerFactory from "./logger";
import * as bodyParser from "body-parser";
import * as mongoAlbum from "./mongo-album";
import * as authentication from "./authentication";
import * as mongoPic from "./mongo-pic";

const logger = loggerFactory.getLogger("route-album");

var albumHandler = function(): express.Express {

    let app = express();

    app.use(bodyParser.json());

    app.post("/", async (req, res) => {
        let body = req.body;
        logger.info("<><><> body is " + JSON.stringify(body));
        let album = await mongoAlbum.getAlbumByName(body.album);
        logger.info("<><><> got album from db " + JSON.stringify(album));

        // If album is private, user needs to be admin
        if (!album.public) {
            // Authenticate user
            let user = await authentication.authenticate(body.token);
            if (!authentication.isUserAdmin(user)) {
                res.sendStatus(403);
                return;
            }
        }

        // Get the pictures in the album
        let pictures = await mongoPic.getPicturesInAlbum(album._id);
        console.info("<><><> pictures in album are " + JSON.stringify(pictures));


    });

    return app;

}

export {
    albumHandler
}