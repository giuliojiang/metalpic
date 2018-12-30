import express = require("express");
import { DomUtils } from "../dom-utils";
import * as mongoalbum from "../mongo-album";

export class VHomeRoute {

    static createApp(): express.Express {
    
        let app = express();

        app.get("/", async (req, res) => {
            let dom = DomUtils.createNewDocument("/metalpic-hub");

            DomUtils.addText(dom, "Metalpic Web Components Pictures Album");

            // Load public albums
            let albums = await mongoalbum.listAlbums(false);

            for (let album of albums) {
                DomUtils.addLink(dom, album.name, `/v/album/${encodeURIComponent(album.name)}/0`);
            }

            res.send(dom.serialize());
        });

        return app;

    }

}