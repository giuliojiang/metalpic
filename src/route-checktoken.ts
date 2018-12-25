import express = require("express");
import * as loggerFactory from "./logger";
import * as authentication from "./authentication";

const logger = loggerFactory.getLogger("route-checktoken");

// Response schema:
// {
//     status: "invalid" or "valid" or "guest"
// }

var checktokenHandler = function(): express.Express {
    var app = express();

    app.get("/:token", async (req, res) => {
        try {
            let token = req.params.token;
            let user = await authentication.authenticate(token);
            if (user == null) {
                // User token not valid
                res.send(JSON.stringify({
                    status: "invalid"
                }));
                return;
            }
            let isAdminUser = authentication.isUserAdmin(user);
            if (isAdminUser) {
                res.send(JSON.stringify({
                    status: "valid"
                }));
                return;
            } else {
                res.send(JSON.stringify({
                    status: "guest"
                }));
                return;
            }
        } catch (err) {
            logger.error("Error occurred", err);
            res.sendStatus(500);
        }
    });

    return app;
}

export {
    checktokenHandler
}