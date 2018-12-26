"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoalbum = __importStar(require("./mongo-album"));
const express = require("express");
const loggerFactory = __importStar(require("./logger"));
const middleware_header_auth_1 = require("./middleware-header-auth");
const logger = loggerFactory.getLogger("route-listalbums");
// Response schema:
// {
//     albums: [
//         name: string,
//         public: boolean,
//         created: Date millis
//     ]
// }
var listHandler = function () {
    var app = express();
    let authenticator = new middleware_header_auth_1.HeaderAuthMiddleware();
    app.use(authenticator.checkAuthentication());
    app.get("/", async (req, res) => {
        try {
            let isAdminUser = req["metalpic_authenticated"];
            // Query database
            let albums = await mongoalbum.listAlbums(isAdminUser);
            let response = {};
            response.albums = [];
            for (let album of albums) {
                response.albums.push({
                    name: album.name,
                    public: album.public,
                    created: album.created.getTime()
                });
            }
            res.send(JSON.stringify(response));
        }
        catch (err) {
            logger.error("Error occurred", err);
            res.sendStatus(500);
        }
    });
    return app;
};
exports.listHandler = listHandler;
//# sourceMappingURL=route-listalbums.js.map