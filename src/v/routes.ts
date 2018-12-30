import express = require("express");
import { VHomeRoute } from "./vhome";

// App mounted at /v

export class VRoutes {

    static createApp(): express.Express {

        let app = express();

        app.get("/", (req, res) => {
            res.redirect("/v/index");
        });

        app.use("/index", VHomeRoute.createApp());

        return app;

    }

}