import express = require("express");
import * as loggerFactory from "./logger";
import * as bodyParser from "body-parser";
import * as mongoAlbum from "./mongo-album";
import * as mongoPic from "./mongo-pic";
import { HeaderAuthMiddleware } from "./middleware-header-auth";
import * as util from "./util";

const logger = loggerFactory.getLogger("route-album");

const ALBUM_PAGE_SIZE = 100;

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

        let authenticated: boolean = (req as any)["metalpic_authenticated"];

        try {
            let albumAndPictures = await getAlbumAndPictures(body.album, body.page, authenticated);

            let result: any = {
            };
            result.pictures = [];
            for (let pic of albumAndPictures.pictures) {
                result.pictures.push({
                    id: pic._id,
                    name: pic.name
                });
            }
            res.send(JSON.stringify(result));
        } catch (err) {
            if (err instanceof AlbumNotFoundError) {
                res.sendStatus(404);
            } else if (err instanceof AlbumUnauthorizedError) {
                res.sendStatus(403);
            } else {
                logger.error("Error", err);
                res.sendStatus(500);
            }
        }
    });

    return app;

}

class AlbumNotFoundError extends Error { }

class AlbumUnauthorizedError extends Error { }

var getAlbumAndPictures = async function(albumname: string, page: number, authenticated: boolean): Promise<{
    album: any,
    pictures: any[]
}> {
    if (!util.isNumber(page)) {
        page = 0;
    }

    let album = await mongoAlbum.getAlbumByName(albumname);
    if (album == null) {
        throw new AlbumNotFoundError();
    }

    // If album is private, user needs to be admin
    if (!album.public) {
        if (!authenticated) {
            throw new AlbumUnauthorizedError();
        }
    }

    // Get the pictures in the album
    let pictures = await mongoPic.getPicturesInAlbum(album._id, page * ALBUM_PAGE_SIZE, ALBUM_PAGE_SIZE);

    return {
        album: album,
        pictures: pictures
    };
}

export {
    albumHandler,
    getAlbumAndPictures,
    AlbumNotFoundError,
    AlbumUnauthorizedError
}