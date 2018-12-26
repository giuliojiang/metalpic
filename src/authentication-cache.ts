import { AuthToken } from "./authentication";
import * as util from "./util";
import { getLogger } from "./logger";

const logger = getLogger("authentication-cache");

export class AuthenticationCache {

    private tokens: Map<AuthToken, Date> = new Map<AuthToken, Date>();

    constructor() {
        this.cleanLoop();
    }

    isValid(token: AuthToken): boolean {
        if (this.tokens.has(token)) {
            this.tokens.set(token, new Date());
            return true;
        }
        return false;
    }

    add(token: AuthToken): void {
        this.tokens.set(token, new Date());
    }

    private async cleanLoop() {
        while (true) {
            await this.longSleep();
            logger.info("Clearing cache");

            let maxAge = 24 * 60 * 60 * 1000; // 24 hours
            let now = new Date().getTime();
            let survivors = new Map<AuthToken, Date>();
            this.tokens.forEach((value, key, map) => {
                let elapsed = now - value.getTime();
                if (elapsed < maxAge) {
                    survivors.set(key, value);
                }
            })
            this.tokens = survivors;
        }
    }

    // 24 hours of sleep
    private async longSleep(): Promise<void> {
        for (let i = 0; i < 24; i++) {
            await util.sleep(60 * 60 * 1000);
        }
    }

}