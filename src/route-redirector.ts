import * as loggerFactory from "./logger";
import express = require("express");
import * as path from "path";

const logger = loggerFactory.getLogger("route-redirector");

var redirectorHandler = function(): express.Express {
    let knownRoutes: Set<string> = new Set<string>();
    knownRoutes.add("metalpic-upload");
    knownRoutes.add("metalpic-hub");
    knownRoutes.add("metalpic-album");

    var app = express();

    app.get("/*", async (req, res, next) => {
        let fullRoute = req.params[0];
        let fullRouteSplit = fullRoute.split("/");
        let controllerName = fullRouteSplit[0];
        if (knownRoutes.has(controllerName)) {
            res.sendFile(path.resolve(__dirname, "..", "www", "index.html"));
        } else {
            next();
        }
    });

    return app;
}

export {
    redirectorHandler
}