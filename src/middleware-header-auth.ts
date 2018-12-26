import express = require("express");
import * as authentication from "./authentication";
import { getLogger } from "./logger";

const logger = getLogger("middleware-header-auth");

// Use in-header authentication token.

export class HeaderAuthMiddleware {

    requireAuthentication(): express.Express {

        let app = express();

        app.all("*", async (req, res, next) => {
            try {
                let authenticated: boolean = await authentication.authenticateFromHttpHeaders(req);
                
                if (!authenticated) {
                    res.sendStatus(403);
                    return;
                }

                next();
            } catch (err) {
                logger.error("Error", err);
                res.sendStatus(403);
                return;
            }
        })

        return app;

    }

    // injects a metalpic_authenticated property in req
    checkAuthentication(): express.Express {
        let app = express();

        app.all("*", async (req, res, next) => {
            try {
                let authenticated: boolean = await authentication.authenticateFromHttpHeaders(req);

                (req as any)["metalpic_authenticated"] = authenticated;

                next();
            } catch (err) {
                logger.error("Error", err);
                res.sendStatus(403);
                return;
            }
        })

        return app;
    }

}