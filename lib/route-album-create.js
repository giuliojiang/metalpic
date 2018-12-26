"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("./logger");
const express = require("express");
const mongoAlbum = __importStar(require("./mongo-album"));
const middleware_header_auth_1 = require("./middleware-header-auth");
const logger = logger_1.getLogger("route-album-create");
// Create a new album
// Uses in-header authentication
// Response:
// {
//     albumid: string
// }
var createHandler = function () {
    let app = express();
    let authMiddleware = new middleware_header_auth_1.HeaderAuthMiddleware();
    app.use(authMiddleware.requireAuthentication());
    app.post("/:albumname", async (req, res) => {
        try {
            // Create the album
            let albumid = await mongoAlbum.createAlbum(req.params.albumname);
            res.send(JSON.stringify({
                albumid: albumid
            }));
        }
        catch (err) {
            logger.error("Error when creating album", err);
            res.sendStatus(500);
            return;
        }
    });
    return app;
};
exports.createHandler = createHandler;
//# sourceMappingURL=route-album-create.js.map