import express = require("express");
import * as loggerFactory from "./logger";
import * as authentication from "./authentication";
import * as conf from "./conf";

const logger = loggerFactory.getLogger("route-checktoken");

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
            let allowedUsers = conf.get().allowedUsers;
            let isAdminUser = allowedUsers.has(user.id);
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