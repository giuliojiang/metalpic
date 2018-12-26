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
const bodyParser = require("body-parser");
const util = __importStar(require("./util"));
const authentication = __importStar(require("./authentication"));
const logger_1 = require("./logger");
const logger = logger_1.getLogger("route-login");
class LoginRoute {
    static createMiddleware() {
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
            }
            catch (err) {
                logger.error("Error", err);
                res.sendStatus(500);
                return;
            }
        });
        return app;
    }
}
exports.LoginRoute = LoginRoute;
//# sourceMappingURL=route-login.js.map