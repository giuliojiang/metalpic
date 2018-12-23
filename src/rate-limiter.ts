import express = require("express");
import * as loggerFactory from "./logger";
import * as util from "./util";

const logger = loggerFactory.getLogger("rate-limiter");

export class RateLimiter {
    
    MAX_REQUESTS_PER_HOUR: number = 36000;
    RESET_INTERVAL: number = 3600 * 1000; // milliseconds
    rateCounts: Map<string, number> = new Map<string, number>();
    
    constructor() {
        this.startResetLoop();
    }

    async startResetLoop() {
        while (true) {
            await util.sleep(this.RESET_INTERVAL);
            logger.info("Reset");
            this.rateCounts.clear();
        }
    }

    isRateLimited(ip: string): boolean {
        // Create if not exists
        if (!this.rateCounts.has(ip)) {
            this.rateCounts.set(ip, 1);
        }

        // Increment
        let oldCount = this.rateCounts.get(ip);
        logger.info(`Address [${ip}], count [${oldCount}]`);

        let limited = oldCount > this.MAX_REQUESTS_PER_HOUR;

        if (!limited) {
            this.rateCounts.set(ip, oldCount + 1);
        }

        return limited;
    }

    createMiddlware(): express.Express {
        let app = express();

        app.all("*", (req, res, next) => {
            let remoteAddressStr = req.connection.remoteAddress.toString();
            if (this.isRateLimited(remoteAddressStr)) {
                res.sendStatus(400);
            } else {
                next();
            }
        });

        return app;
    }

}