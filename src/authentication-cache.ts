import { GoogleUser } from "./authentication";
import * as util from "./util";
import { getLogger } from "./logger";

const logger = getLogger("authentication-cache");

export class AuthenticationCache {

    private tokens: Map<string, GoogleUser> = new Map<string, GoogleUser>();

    constructor() {
        this.cleanLoop();
    }

    async getOrSet(token: string, setter: () => Promise<GoogleUser>): Promise<GoogleUser> {
        if (this.tokens.has(token)) {
            logger.info("cache hit");
            return this.tokens.get(token);
        }
        logger.info("cache miss");

        let user = await setter();
        if (user != null) {
            this.tokens.set(token, user);
        }
        return user;
    }

    private async cleanLoop() {
        while (true) {
            await util.sleep(10 * 60 * 1000); // 10 minutes
            logger.info("Clearing cache");
            this.tokens.clear();
        }
    }

}