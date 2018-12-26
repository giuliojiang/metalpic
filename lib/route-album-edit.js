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
const middleware_header_auth_1 = require("./middleware-header-auth");
const mongoAlbum = __importStar(require("./mongo-album"));
const logger = logger_1.getLogger("route-album-edit");
class RouteAlbumEdit {
    createHandler() {
        let app = express();
        let authMiddleware = new middleware_header_auth_1.HeaderAuthMiddleware();
        app.use(authMiddleware.requireAuthentication());
        app.post("/changevisibility/:albumname/:newvisibility", async (req, res) => {
            try {
                let newIsPublic;
                if (req.params.newvisibility == "public") {
                    newIsPublic = true;
                }
                else if (req.params.newvisibility == "private") {
                    newIsPublic = false;
                }
                else {
                    res.status(400);
                    res.send(`Unrecognized value for newvisibility parameter. You sent [${req.params.newvisibility}] but supported are "public" and "private"`);
                    return;
                }
                await mongoAlbum.setVisibility(req.params.albumname, newIsPublic);
                res.status(200);
                res.send("{}");
            }
            catch (err) {
                if (err instanceof mongoAlbum.AlbumNotFoundError) {
                    res.status(400);
                    res.send("The album doesn't exist");
                    return;
                }
                else {
                    res.sendStatus(500);
                    logger.error("Error", err);
                    return;
                }
            }
        });
        return app;
    }
}
exports.RouteAlbumEdit = RouteAlbumEdit;
//# sourceMappingURL=route-album-edit.js.map