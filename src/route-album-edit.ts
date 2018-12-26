import { getLogger } from "./logger";
import express = require("express");
import { HeaderAuthMiddleware } from "./middleware-header-auth";
import * as mongoAlbum from "./mongo-album";

const logger = getLogger("route-album-edit");

export class RouteAlbumEdit {

    createHandler(): express.Express {
        let app = express();

        let authMiddleware = new HeaderAuthMiddleware();

        app.use(authMiddleware.requireAuthentication());

        app.post("/changevisibility/:albumname/:newvisibility", async (req, res) => {
            try {
                let newIsPublic: boolean;
                if (req.params.newvisibility == "public") {
                    newIsPublic = true;
                } else if (req.params.newvisibility == "private") {
                    newIsPublic = false;
                } else {
                    res.status(400);
                    res.send(`Unrecognized value for newvisibility parameter. You sent [${req.params.newvisibility}] but supported are "public" and "private"`);
                    return;
                }
                await mongoAlbum.setVisibility(req.params.albumname, newIsPublic);
                res.status(200);
                res.send("{}");
            } catch (err) {
                if (err instanceof mongoAlbum.AlbumNotFoundError) {
                    res.status(400);
                    res.send("The album doesn't exist");
                    return;
                } else {
                    res.sendStatus(500);
                    logger.error("Error", err);
                    return;
                }
            }
        });

        return app;
    }
}