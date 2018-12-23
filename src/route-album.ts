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
        let album = await mongoAlbum.getAlbumByName(body.album);

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
        let result: any = {
        };
        result.pictures = [];
        for (let pic of pictures) {
            result.pictures.push({
                id: pic._id,
                name: pic.name
            });
        }
        res.send(JSON.stringify(result));
    });

    return app;

}

export {
    albumHandler
}