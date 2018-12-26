import { AuthToken } from "./authentication";
import * as util from "./util";
import { getLogger } from "./logger";

const logger = getLogger("authentication-cache");

export class AuthenticationCache {

    private tokens: Set<AuthToken> = new Set<AuthToken>();

    constructor() {
        this.cleanLoop();
    }

    isValid(token: AuthToken): boolean {
        return this.tokens.has(token);
    }

    add(token: AuthToken): void {
        this.tokens.add(token);
    }

    private async cleanLoop() {
        while (true) {
            await this.longSleep();
            logger.info("Clearing cache");
            this.tokens.clear();
        }
    }

    // 24 hours of sleep
    private async longSleep(): Promise<void> {
        for (let i = 0; i < 24; i++) {
            await util.sleep(60 * 60 * 1000);
        }
    }

}