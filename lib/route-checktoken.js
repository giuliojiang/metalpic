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
const loggerFactory = __importStar(require("./logger"));
const authentication = __importStar(require("./authentication"));
const logger = loggerFactory.getLogger("route-checktoken");
// Response schema:
// {
//     valid: boolean
// }
var checktokenHandler = function () {
    var app = express();
    app.post("/", async (req, res) => {
        try {
            let authenticated = await authentication.authenticateFromHttpHeaders(req);
            res.status(200);
            res.send(JSON.stringify({
                valid: authenticated
            }));
        }
        catch (err) {
            logger.error("Error", err);
            res.sendStatus(500);
        }
    });
    return app;
};
exports.checktokenHandler = checktokenHandler;
//# sourceMappingURL=route-checktoken.js.map