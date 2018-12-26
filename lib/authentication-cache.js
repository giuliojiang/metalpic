"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const util = __importStar(require("./util"));
const logger_1 = require("./logger");
const logger = logger_1.getLogger("authentication-cache");
class AuthenticationCache {
    constructor() {
        this.tokens = new Map();
        this.cleanLoop();
    }
    isValid(token) {
        if (this.tokens.has(token)) {
            this.tokens.set(token, new Date());
            return true;
        }
        return false;
    }
    add(token) {
        this.tokens.set(token, new Date());
    }
    async cleanLoop() {
        while (true) {
            await this.longSleep();
            logger.info("Clearing cache");
            let maxAge = 24 * 60 * 60 * 1000; // 24 hours
            let now = new Date().getTime();
            let survivors = new Map();
            this.tokens.forEach((value, key, map) => {
                let elapsed = now - value.getTime();
                if (elapsed < maxAge) {
                    survivors.set(key, value);
                }
            });
            this.tokens = survivors;
        }
    }
    // 24 hours of sleep
    async longSleep() {
        for (let i = 0; i < 24; i++) {
            await util.sleep(60 * 60 * 1000);
        }
    }
}
exports.AuthenticationCache = AuthenticationCache;
//# sourceMappingURL=authentication-cache.js.map