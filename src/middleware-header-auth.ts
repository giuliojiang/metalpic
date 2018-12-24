import express = require("express");
import * as authentication from "./authentication";
import { getLogger } from "./logger";

const logger = getLogger("middleware-header-auth");

// Use in-header authentication token.
// Injects "guser_user": authentication.GoogleUser and
// "guser_admin": boolean into req for the next middleware

export class HeaderAuthMiddleware {

    requireAuthentication(): express.Express {

        let app = express();

        app.all("*", async (req, res, next) => {
            try {
                let user = await authentication.authenticateFromHttpHeaders(req);
                if (user == null) {
                    res.sendStatus(403);
                    return;
                }
                (req as any)["guser_user"] = user;
                (req as any)["guser_admin"] = authentication.isUserAdmin(user);
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