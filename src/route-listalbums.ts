import * as mongoalbum from "./mongo-album";
import express = require("express");
import * as loggerFactory from "./logger";
import * as authentication from "./authentication";
import * as conf from "./conf";

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

    app.get("/:token", async (req, res) => {
        try {
            let token = req.params.token;
            let user = await authentication.authenticate(token);
            // Check user
            let allowedUsers = conf.get().allowedUsers;
            let isAdminUser = allowedUsers.has(user.id);

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