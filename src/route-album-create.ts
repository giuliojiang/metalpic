import { getLogger } from "./logger";
import express = require("express");
import * as mongoAlbum from "./mongo-album";
import { HeaderAuthMiddleware } from "./middleware-header-auth";

const logger = getLogger("route-album-create");

// Create a new album
// Uses in-header authentication

// Response:
// {
//     albumid: string
// }

var createHandler = function(): express.Express {
    
    let app = express();

    let authMiddleware = new HeaderAuthMiddleware();
    app.use(authMiddleware.requireAuthentication());

    app.post("/:albumname", async (req, res) => {
        try {
            // Create the album
            let albumid = await mongoAlbum.createAlbum(req.params.albumname);

            res.send(JSON.stringify({
                albumid: albumid
            }));

        } catch (err) {
            logger.error("Error when creating album", err);
            res.sendStatus(500);
            return;
        }
    });

    return app;

}

export {
    createHandler
}