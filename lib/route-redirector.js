"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const loggerFactory = __importStar(require("./logger"));
const express = require("express");
const path = __importStar(require("path"));
const logger = loggerFactory.getLogger("route-redirector");
var redirectorHandler = function () {
    let knownRoutes = new Set();
    knownRoutes.add("metalpic-upload");
    knownRoutes.add("metalpic-hub");
    knownRoutes.add("metalpic-album");
    knownRoutes.add("metalpic-control-panel");
    var app = express();
    app.get("/*", async (req, res, next) => {
        let fullRoute = req.params[0];
        let fullRouteSplit = fullRoute.split("/");
        let controllerName = fullRouteSplit[0];
        if (knownRoutes.has(controllerName)) {
            res.sendFile(path.resolve(__dirname, "..", "www", "index.html"));
        }
        else {
            next();
        }
    });
    return app;
};
exports.redirectorHandler = redirectorHandler;
//# sourceMappingURL=route-redirector.js.map