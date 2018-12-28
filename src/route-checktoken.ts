import express = require("express");
import * as loggerFactory from "./logger";
import * as authentication from "./authentication";

const logger = loggerFactory.getLogger("route-checktoken");

// Response schema:
// {
//     valid: boolean
// }

var checktokenHandler = function(): express.Express {
    var app = express();

    app.post("/", async (req, res) => {
        try {
            let authenticated = await authentication.authenticateFromHttpHeaders(req);
            res.status(200);
            res.send(JSON.stringify({
                valid: authenticated
            }));
        } catch (err) {
            logger.error("Error", err);
            res.sendStatus(500);
        }
    });

    return app;
}

export {
    checktokenHandler
}