import * as loggerFactory from "./logger";
import express = require("express");
import * as path from "path";

const logger = loggerFactory.getLogger("route-redirector");

var redirectorHandler = function(): express.Express {
    let knownRoutes: Set<string> = new Set<string>();
    knownRoutes.add("metalpic-upload");
    knownRoutes.add("metalpic-hub");

    var app = express();

    app.get("/:routeName", async (req, res, next) => {
        if (knownRoutes.has(req.params.routeName)) {
            logger.info("Matched a known route " + req.params.routeName);
            res.sendFile(path.resolve(__dirname, "..", "www", "index.html"));
        } else {
            logger.info("Not matched, calling next");
            next();
        }
    });

    return app;
}

export {
    redirectorHandler
}