import express = require("express");
import * as routeUpload from "./route-upload";
import * as conf from "./conf";
import * as mongoose from "./mongoose-models";
import * as path from "path";
import * as routeListAlbums from "./route-listalbums";
import * as routeRedirector from "./route-redirector";
import * as routeChecktoken from "./route-checktoken";

var createApp = async function(config: conf.Conf): Promise<express.Express> {
    // init
    conf.set(config);
    await mongoose.connect();

    var app = express();
    app.use("/", routeRedirector.redirectorHandler());
    app.use("/", express.static(path.resolve(__dirname, "..", "www")));
    app.use("/api/upload", routeUpload.uploadHandler());
    app.use("/api/checktoken", routeChecktoken.checktokenHandler());
    app.use("/list", routeListAlbums.listHandler());

    return app;
};

export { createApp }