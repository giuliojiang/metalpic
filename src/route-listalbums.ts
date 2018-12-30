import * as mongoalbum from "./mongo-album";
import express = require("express");
import * as loggerFactory from "./logger";
import { HeaderAuthMiddleware } from "./middleware-header-auth";

const logger = loggerFactory.getLogger("route-listalbums");

// Response schema:
// {
//     albums: [
//         name: string,
//         public: boolean,
//         created: Date millis
//     ]
// }

var listHandler = function(): express.Express {

    var app = express();

    let authenticator = new HeaderAuthMiddleware();
    app.use(authenticator.checkAuthentication());

    app.get("/", async (req, res) => {
        try {
            let isAdminUser: boolean = (req as any)["metalpic_authenticated"];

            // Query database
            let albums = await mongoalbum.listAlbums(isAdminUser);

            let response = {} as any;
            response.albums = [];
            for (let album of albums) {
                response.albums.push({
                    name: album.name,
                    public: album.public,
                    created: album.created.getTime()
                });
            }
            res.send(JSON.stringify(response));
        } catch (err) {
            logger.error("Error occurred", err);
            res.sendStatus(500);
        }
    });

    return app;
}

export {
    listHandler
}