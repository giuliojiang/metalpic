import { AuthToken } from "./authentication";
export declare class AuthenticationCache {
    private tokens;
    constructor();
    isValid(token: AuthToken): boolean;
    add(token: AuthToken): void;
    private cleanLoop;
    private longSleep;
}
//# sourceMappingURL=authentication-cache.d.ts.map