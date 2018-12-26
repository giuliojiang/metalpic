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
const authentication = __importStar(require("./authentication"));
const logger_1 = require("./logger");
const logger = logger_1.getLogger("middleware-header-auth");
// Use in-header authentication token.
class HeaderAuthMiddleware {
    requireAuthentication() {
        let app = express();
        app.all("*", async (req, res, next) => {
            try {
                let authenticated = await authentication.authenticateFromHttpHeaders(req);
                if (!authenticated) {
                    res.sendStatus(403);
                    return;
                }
                next();
            }
            catch (err) {
                logger.error("Error", err);
                res.sendStatus(403);
                return;
            }
        });
        return app;
    }
    // injects a metalpic_authenticated property in req
    checkAuthentication() {
        let app = express();
        app.all("*", async (req, res, next) => {
            try {
                let authenticated = await authentication.authenticateFromHttpHeaders(req);
                req["metalpic_authenticated"] = authenticated;
                next();
            }
            catch (err) {
                logger.error("Error", err);
                res.sendStatus(403);
                return;
            }
        });
        return app;
    }
}
exports.HeaderAuthMiddleware = HeaderAuthMiddleware;
//# sourceMappingURL=middleware-header-auth.js.map