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
const routeUpload = __importStar(require("./route-upload"));
const conf = __importStar(require("./conf"));
const mongoose = __importStar(require("./mongoose-models"));
const path = __importStar(require("path"));
const routeListAlbums = __importStar(require("./route-listalbums"));
const routeRedirector = __importStar(require("./route-redirector"));
const routeChecktoken = __importStar(require("./route-checktoken"));
const routeAlbum = __importStar(require("./route-album"));
const routeImage = __importStar(require("./route-image"));
const routeAlbumCreate = __importStar(require("./route-album-create"));
const route_album_edit_1 = require("./route-album-edit");
const authentication = __importStar(require("./authentication"));
const route_login_1 = require("./route-login");
const s3 = __importStar(require("./s3"));
const helmet = require("helmet");
const routes_1 = require("./v/routes");
var createApp = async function (config) {
    // init
    conf.set(config);
    authentication.initialize();
    await mongoose.connect();
    await routeUpload.createUploadDir();
    let routeAlbumEdit = new route_album_edit_1.RouteAlbumEdit;
    await s3.initBucket();
    var app = express();
    app.use(helmet());
    app.get("/", (req, res) => {
        res.redirect("/v/index");
    });
    app.use("/v", routes_1.VRoutes.createApp());
    app.use("/", routeRedirector.redirectorHandler());
    app.use("/", express.static(path.resolve(__dirname, "..", "www")));
    app.use("/api/upload", routeUpload.uploadHandler());
    app.use("/api/checktoken", routeChecktoken.checktokenHandler());
    app.use("/list", routeListAlbums.listHandler());
    app.use("/api/album", routeAlbum.albumHandler());
    app.use("/api/image", routeImage.imageHandler());
    app.use("/api/createalbum", routeAlbumCreate.createHandler());
    app.use("/api/editalbum", routeAlbumEdit.createHandler());
    app.use("/api/login", route_login_1.LoginRoute.createMiddleware());
    return app;
};
exports.createApp = createApp;
//# sourceMappingURL=index.js.map