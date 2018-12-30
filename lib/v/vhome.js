"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const dom_utils_1 = require("../dom-utils");
class VHomeRoute {
    static createApp() {
        let app = express();
        app.get("/", (req, res) => {
            let dom = dom_utils_1.DomUtils.createNewDocument();
            dom_utils_1.DomUtils.addText(dom, "Hello World, <p>hello</p>");
            res.send(dom.serialize());
        });
        return app;
    }
}
exports.VHomeRoute = VHomeRoute;
//# sourceMappingURL=vhome.js.map