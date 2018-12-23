import { OAuth2Client } from "google-auth-library";
import * as conf from "./conf";
import express = require("express");

interface GoogleUser {
    id: string;
    name: string;
}

// ============================================================================

var authenticate = async function(googleToken: string): Promise<GoogleUser> {
    var client = new OAuth2Client(conf.get().googleClientId);

    var ticket;
    try {
        ticket = await client.verifyIdToken({
            idToken: googleToken,
            audience: conf.get().googleClientId
        });
    } catch (err) {
        console.error("Authentication error: ", err);
        return null;
    }

    const payload = ticket.getPayload();
    const userId = payload["sub"];
    var username = payload["name"];

    return {
        id: userId,
        name: username
    };

};

var authenticateFromHttpHeaders = function(req: express.Request): Promise<GoogleUser> {
    let token: string = req.get("Metalpic-Auth-Token");
    return authenticate(token);
}

var isUserAdmin = function(user: GoogleUser): boolean {
    if (user == null) {
        return false;
    }
    let adminUsers = conf.get().allowedUsers;
    return adminUsers.has(user.id);
}

export { 
    GoogleUser,
    authenticate,
    authenticateFromHttpHeaders,
    isUserAdmin
}