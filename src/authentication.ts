import * as conf from "./conf";
import express = require("express");
import { AuthenticationCache } from "./authentication-cache";
import cryptoRandomString = require("crypto-random-string");

var priv: {
    authCache: AuthenticationCache
} = {
    authCache: null
};

export interface AuthToken extends String { }

var initialize = function() {
    priv.authCache = new AuthenticationCache();
}

var authenticate = function(username: string, pass: string): AuthToken {
    let config = conf.get();
    if (username === config.username && pass === config.password) {
        let token: AuthToken = cryptoRandomString(48);
        priv.authCache.add(token);
        return token;
    } else {
        return null;
    }
};

var authenticateFromToken = function(token: AuthToken): boolean {
    return priv.authCache.isValid(token);
}

var authenticateFromHttpHeaders = function(req: express.Request): boolean {
    let token: string = req.get("Metalpic-Auth-Token");
    return authenticateFromToken(token);
}

export { 
    initialize,
    authenticate,
    authenticateFromHttpHeaders
}