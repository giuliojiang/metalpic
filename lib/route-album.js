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
const loggerFactory = __importStar(require("./logger"));
const bodyParser = __importStar(require("body-parser"));
const mongoAlbum = __importStar(require("./mongo-album"));
const mongoPic = __importStar(require("./mongo-pic"));
const middleware_header_auth_1 = require("./middleware-header-auth");
const util = __importStar(require("./util"));
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
var albumHandler = function () {
    let app = express();
    app.use(bodyParser.json());
    let authenticator = new middleware_header_auth_1.HeaderAuthMiddleware();
    app.use(authenticator.checkAuthentication());
    app.post("/", async (req, res) => {
        let body = req.body;
        let authenticated = req["metalpic_authenticated"];
        try {
            let albumAndPictures = await getAlbumAndPictures(body.album, body.page, authenticated);
            let result = {};
            result.pictures = [];
            for (let pic of albumAndPictures.pictures) {
                result.pictures.push({
                    id: pic._id,
                    name: pic.name
                });
            }
            res.send(JSON.stringify(result));
        }
        catch (err) {
            if (err instanceof AlbumNotFoundError) {
                res.sendStatus(404);
            }
            else if (err instanceof AlbumUnauthorizedError) {
                res.sendStatus(403);
            }
            else {
                logger.error("Error", err);
                res.sendStatus(500);
            }
        }
    });
    return app;
};
exports.albumHandler = albumHandler;
class AlbumNotFoundError extends Error {
}
exports.AlbumNotFoundError = AlbumNotFoundError;
class AlbumUnauthorizedError extends Error {
}
exports.AlbumUnauthorizedError = AlbumUnauthorizedError;
var getAlbumAndPictures = async function (albumname, page, authenticated) {
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
};
exports.getAlbumAndPictures = getAlbumAndPictures;
//# sourceMappingURL=route-album.js.map