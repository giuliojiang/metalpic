import express = require("express");
import * as loggerFactory from "./logger";
import { HeaderAuthMiddleware } from "./middleware-header-auth";

const logger = loggerFactory.getLogger("route-checktoken");

// Response schema:
// 403 if invalid
// 200 if valid

var checktokenHandler = function(): express.Express {
    var app = express();

    let authenticator = new HeaderAuthMiddleware();
    app.use(authenticator.requireAuthentication());

    app.get("/", async (req, res) => {
        res.sendStatus(200);
    });

    return app;
}

export {
    checktokenHandler
}