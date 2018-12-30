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
import { RouteAlbumEdit } from "./route-album-edit";
import * as authentication from "./authentication";
import { LoginRoute } from "./route-login";
import * as s3 from "./s3";
import helmet = require("helmet");
import { VRoutes } from "./v/routes";

var createApp = async function(config: conf.Conf): Promise<express.Express> {
    // init
    conf.set(config);
    authentication.initialize();
    await mongoose.connect();
    await routeUpload.createUploadDir();
    let routeAlbumEdit = new RouteAlbumEdit;
    await s3.initBucket();

    var app = express();

    app.use(helmet());

    // app.get("/", (req, res) => {
    //     res.redirect("/v/index");
    // })
    
    // app.use("/v", VRoutes.createApp());
    app.use("/", routeRedirector.redirectorHandler());
    app.use("/", express.static(path.resolve(__dirname, "..", "www")));
    app.use("/api/upload", routeUpload.uploadHandler());
    app.use("/api/checktoken", routeChecktoken.checktokenHandler());
    app.use("/list", routeListAlbums.listHandler());
    app.use("/api/album", routeAlbum.albumHandler());
    app.use("/api/image", routeImage.imageHandler());
    app.use("/api/createalbum", routeAlbumCreate.createHandler());
    app.use("/api/editalbum", routeAlbumEdit.createHandler());
    app.use("/api/login", LoginRoute.createMiddleware());

    return app;
};

export { createApp }