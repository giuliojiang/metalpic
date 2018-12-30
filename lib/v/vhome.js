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
const mongoalbum = __importStar(require("../mongo-album"));
class VHomeRoute {
    static createApp() {
        let app = express();
        app.get("/", async (req, res) => {
            let dom = dom_utils_1.DomUtils.createNewDocument();
            dom_utils_1.DomUtils.addText(dom, "Metalpic Web Components Pictures Album");
            // Load public albums
            let albums = await mongoalbum.listAlbums(false);
            for (let album of albums) {
                dom_utils_1.DomUtils.addLink(dom, album.name, `/v/album/${encodeURIComponent(album.name)}`);
            }
            res.send(dom.serialize());
        });
        return app;
    }
}
exports.VHomeRoute = VHomeRoute;
//# sourceMappingURL=vhome.js.map