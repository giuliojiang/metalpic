"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const conf = __importStar(require("./conf"));
const authentication_cache_1 = require("./authentication-cache");
const cryptoRandomString = require("crypto-random-string");
var priv = {
    authCache: null
};
var initialize = function () {
    priv.authCache = new authentication_cache_1.AuthenticationCache();
};
exports.initialize = initialize;
var authenticate = function (username, pass) {
    let config = conf.get();
    if (username === config.username && pass === config.password) {
        let token = cryptoRandomString(48);
        priv.authCache.add(token);
        return token;
    }
    else {
        return null;
    }
};
exports.authenticate = authenticate;
var authenticateFromToken = function (token) {
    return priv.authCache.isValid(token);
};
var authenticateFromHttpHeaders = function (req) {
    let token = req.get("Metalpic-Auth-Token");
    return authenticateFromToken(token);
};
exports.authenticateFromHttpHeaders = authenticateFromHttpHeaders;
//# sourceMappingURL=authentication.js.map