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
const dom_utils_1 = require("../dom-utils");
const routeAlbum = __importStar(require("../route-album"));
const logger_1 = require("../logger");
const logger = logger_1.getLogger("v/valbum.ts");
class VAlbumRoute {
    static createApp() {
        let app = express();
        app.get("/:albumname/:page", async (req, res) => {
            try {
                let page = parseInt(req.params.page);
                let dom = dom_utils_1.DomUtils.createNewDocument(`/metalpic-album/${encodeURIComponent(req.params.albumname)}`);
                // Get the album
                let albumAndPictures = await routeAlbum.getAlbumAndPictures(req.params.albumname, page, false);
                // Write album name
                dom_utils_1.DomUtils.addText(dom, albumAndPictures.album.name);
                // Write album pictures
                for (let pic of albumAndPictures.pictures) {
                    dom_utils_1.DomUtils.addPicture(dom, pic.name, `/api/image/${pic._id.toString()}/image.png`);
                }
                // Write link to next page
                if (albumAndPictures.pictures.length > 0) {
                    dom_utils_1.DomUtils.addLink(dom, "Next page", `/v/album/${encodeURIComponent(req.params.albumname)}/${(page + 1)}`);
                }
                res.send(dom.serialize());
            }
            catch (err) {
                if (err instanceof routeAlbum.AlbumNotFoundError) {
                    res.sendStatus(404);
                }
                else if (err instanceof routeAlbum.AlbumUnauthorizedError) {
                    res.sendStatus(403);
                }
                else {
                    logger.error("Error", err);
                    res.sendStatus(500);
                }
            }
        });
        return app;
    }
}
exports.VAlbumRoute = VAlbumRoute;
//# sourceMappingURL=valbum.js.map