import { getLogger } from "./logger";
import express = require("express");
import * as authentication from "./authentication";
import * as mongoAlbum from "./mongo-album";

const logger = getLogger("route-album-create");

// Create a new album
// Uses in-header authentication

// Response:
// {
//     albumid: string
// }

var createHandler = function(): express.Express {
    
    let app = express();

    app.post("/:albumname", async (req, res) => {
        try {
            // Authenticate
            let user = await authentication.authenticateFromHttpHeaders(req);

            if (!authentication.isUserAdmin(user)) {
                res.sendStatus(401);
                return;
            }

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