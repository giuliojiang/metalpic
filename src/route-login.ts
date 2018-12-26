import express = require("express");
import bodyParser = require("body-parser");
import * as util from "./util";
import * as authentication from "./authentication";
import { getLogger } from "./logger";

const logger = getLogger("route-login");

export class LoginRoute {

    static createMiddleware(): express.Express {

        let app = express();

        app.use(bodyParser.json());

        app.post("/", async (req, res) => {

            try {
                let body = req.body;
                let user = body.user;
                let pass = body.pass;

                if (util.stringNullOrEmpty(user)) {
                    res.status(400);
                    res.send("Username must be a string");
                    return;
                }

                if (util.stringNullOrEmpty(pass)) {
                    res.status(400);
                    res.send("Password must be a string");
                    return;
                }

                let token = authentication.authenticate(user, pass);
                if (token == null) {
                    res.sendStatus(403);
                    return;
                }

                res.status(200);
                res.send(JSON.stringify({
                    token: token
                }));
                return;
            } catch (err) {
                logger.error("Error", err);
                res.sendStatus(500);
                return;
            }

        });

        return app;

    }

}