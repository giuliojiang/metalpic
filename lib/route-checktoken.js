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
const middleware_header_auth_1 = require("./middleware-header-auth");
const logger = loggerFactory.getLogger("route-checktoken");
// Response schema:
// 403 if invalid
// 200 if valid
var checktokenHandler = function () {
    var app = express();
    let authenticator = new middleware_header_auth_1.HeaderAuthMiddleware();
    app.use(authenticator.requireAuthentication());
    app.get("/", async (req, res) => {
        res.sendStatus(200);
    });
    return app;
};
exports.checktokenHandler = checktokenHandler;
//# sourceMappingURL=route-checktoken.js.map