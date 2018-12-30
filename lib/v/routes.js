"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const vhome_1 = require("./vhome");
// App mounted at /v
class VRoutes {
    static createApp() {
        let app = express();
        app.get("/", (req, res) => {
            res.redirect("/v/index");
        });
        app.use("/index", vhome_1.VHomeRoute.createApp());
        return app;
    }
}
exports.VRoutes = VRoutes;
//# sourceMappingURL=routes.js.map