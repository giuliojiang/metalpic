import express = require("express");
import * as routeUpload from "./route-upload";
import * as conf from "./conf";
import * as mongoose from "./mongoose-models";
import * as path from "path";
import * as routeListAlbums from "./route-listalbums";
import * as routeRedirector from "./route-redirector";
import * as routeChecktoken from "./route-checktoken";
import * as routeAlbum from "./route-album";
import * as routeImage from "./route-image";
import * as routeAlbumCreate from "./route-album-create";

var createApp = async function(config: conf.Conf): Promise<express.Express> {
    // init
    conf.set(config);
    await mongoose.connect();
    await routeUpload.createUploadDir();

    var app = express();
    app.use("/", routeRedirector.redirectorHandler());
    app.use("/", express.static(path.resolve(__dirname, "..", "www")));
    app.use("/api/upload", routeUpload.uploadHandler());
    app.use("/api/checktoken", routeChecktoken.checktokenHandler());
    app.use("/list", routeListAlbums.listHandler());
    app.use("/api/album", routeAlbum.albumHandler());
    app.use("/api/image", routeImage.imageHandler());
    app.use("/api/createalbum", routeAlbumCreate.createHandler());

    return app;
};

export { createApp }