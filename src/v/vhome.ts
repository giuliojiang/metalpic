import express = require("express");
import { DomUtils } from "../dom-utils";

export class VHomeRoute {

    static createApp(): express.Express {
    
        let app = express();

        app.get("/", (req, res) => {
            let dom = DomUtils.createNewDocument();
            DomUtils.addText(dom, "Hello World, <p>hello</p>");
            res.send(dom.serialize());
        });

        return app;

    }

}