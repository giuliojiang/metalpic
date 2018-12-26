import express = require("express");
export interface AuthToken extends String {
}
declare var initialize: () => void;
declare var authenticate: (username: string, pass: string) => AuthToken;
declare var authenticateFromHttpHeaders: (req: express.Request) => boolean;
export { initialize, authenticate, authenticateFromHttpHeaders };
//# sourceMappingURL=authentication.d.ts.map