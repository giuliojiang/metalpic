"use strict";

const path = require("path");
const {OAuth2Client} = require('google-auth-library');
const conf = require(path.resolve(__dirname, "conf.js"));

// ============================================================================
module.exports.authenticate = async function(googleToken) {
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