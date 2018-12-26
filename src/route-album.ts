import express = require("express");
import * as loggerFactory from "./logger";
import * as bodyParser from "body-parser";
import * as mongoAlbum from "./mongo-album";
import * as mongoPic from "./mongo-pic";
import { HeaderAuthMiddleware } from "./middleware-header-auth";
import * as util from "./util";

const logger = loggerFactory.getLogger("route-album");

const ALBUM_PAGE_SIZE = 3; // <><><> change to 100

// Get list of pictures in an album

// Request schema:
// {
//     album: string,
//     page: number
// }

// Response schema:
// {
//     pictures: [
//         {
//             id,
//             name
//         }
//     ]
// }

var albumHandler = function(): express.Express {

    let app = express();

    app.use(bodyParser.json());

    let authenticator = new HeaderAuthMiddleware();
    app.use(authenticator.checkAuthentication());

    app.post("/", async (req, res) => {
        let body = req.body;
        let page = body.page;

        if (!util.isNumber(page)) {
            page = 0;
        }

        let album = await mongoAlbum.getAlbumByName(body.album);

        // If album is private, user needs to be admin
        if (!album.public) {
            // Authenticate user
            let authenticated: boolean = (req as any)["metalpic_authenticated"];
            if (!authenticated) {
                res.sendStatus(403);
                return;
            }
        }

        // Get the pictures in the album
        let pictures = await mongoPic.getPicturesInAlbum(album._id, page * ALBUM_PAGE_SIZE, ALBUM_PAGE_SIZE);
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