import express = require("express");
import { DomUtils } from "../dom-utils";
import * as routeAlbum from "../route-album";
import { getLogger } from "../logger";

const logger = getLogger("v/valbum.ts");

export class VAlbumRoute {

    static createApp(): express.Express {

        let app = express();

        app.get("/:albumname/:page", async (req, res) => {
            
            try {
                let page = parseInt(req.params.page);

                let dom = DomUtils.createNewDocument(`/metalpic-album/${encodeURIComponent(req.params.albumname)}`);

                // Get the album
                let albumAndPictures = await routeAlbum.getAlbumAndPictures(req.params.albumname, page, false);

                // Write album name
                DomUtils.addText(dom, albumAndPictures.album.name);

                // Write album pictures
                for (let pic of albumAndPictures.pictures) {
                    DomUtils.addPicture(dom, pic.name, `/api/image/${pic._id.toString()}/image.png`);
                }

                // Write link to next page
                if (albumAndPictures.pictures.length > 0) {
                    DomUtils.addLink(dom, "Next page", `/v/album/${encodeURIComponent(req.params.albumname)}/${(page + 1)}`);
                }

                res.send(dom.serialize());
            } catch (err) {
                if (err instanceof routeAlbum.AlbumNotFoundError) {
                    res.sendStatus(404);
                } else if (err instanceof routeAlbum.AlbumUnauthorizedError) {
                    res.sendStatus(403);
                } else {
                    logger.error("Error", err);
                    res.sendStatus(500);
                }
            }

        });

        return app;

    }

}